import React, {useEffect, useRef} from "react"

function Index(){
    let localvideo=useRef();
    let remotevideo=useRef();
    useEffect(()=>{
        navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
                devices.forEach(function (device) {
                    console.log(device.kind + ":" + device.label + "  id=" + device.deviceId);
                });
            }).catch(function (err) {
            console.log(err.message);
        })

        console.log(localvideo)
    },[])
    useEffect(()=>{
         (async()=>{
             const iceConfig = {"iceServers": [
                     {urls: 'stun:stun.ekiga.net'},
                 ]};
            let p1=new RTCPeerConnection(iceConfig);
            let p2=new RTCPeerConnection(iceConfig);
            p1.onnegotiationneeded=async ()=>{
                await p1.createOffer()
                    .then((offer) => p1.setLocalDescription(new RTCSessionDescription(offer)));
                await p2.setRemoteDescription(new RTCSessionDescription(p1.localDescription));
                await p2.createAnswer()
                    .then((answer) => p2.setLocalDescription(new RTCSessionDescription(answer)));
                await p1.setRemoteDescription(new RTCSessionDescription(p2.localDescription));
            }
            p1.onicecandidate=async (evt)=>{
                console.log(evt)
                await p2.addIceCandidate(evt.candidate)
            }

             await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
                .then(function (mediaStream) {
                    console.log(mediaStream)
                    //将获取到的视频流放入video标签内展示
                    if ("srcObject" in localvideo.current) {
                        localvideo.current.srcObject = mediaStream;
                    } else {
                        localvideo.current.src = window.URL.createObjectURL(mediaStream);
                    }
                    localvideo.current.onloadedmetadata = function(e){
                        localvideo.current.play();
                    }
                    mediaStream.getTracks().forEach(track => {
                        p1.addTrack(track, mediaStream);
                    });
                }).catch(function (err) {
                console.log(err.message);
            })

             p2.ontrack=async (evt)=>{
                 console.log(evt)
                 if(evt.streams && evt.streams[0]){
                     remotevideo.current.srcObject = evt.streams[0];
                 }
             }

        })()

    },[])
    return (
        <div>
            <video ref={localvideo}><track default kind="captions"/></video>
            <video ref={remotevideo} controls={true}><track default kind="captions"/></video>
        </div>
    )
}
export default Index