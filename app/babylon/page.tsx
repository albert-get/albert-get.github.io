"use client"

import { FunctionComponent, useEffect, useRef } from "react"
import {
    Vector3,Matrix,
    FreeCamera,
    Engine,
    HemisphericLight,
    CreateGround,
    CreateSphere,
    CreateLines,
    Scene,
    CreateDisc,
    Color3,
    StandardMaterial,
    Texture,
    GlowLayer,
    ArcRotateCamera
} from "@babylonjs/core";

import { GridMaterial } from "@babylonjs/materials";
import dynamic from "next/dynamic";

function Babylon(){
    const canvas=useRef(null);
    
    useEffect(()=>{
        let vector3 = new Vector3(0, 5, -10);

        const engine = new Engine(canvas.current);
        
        let scene = new Scene(engine);
        const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 3, 10, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        var material = new StandardMaterial("grid", scene);
        material.diffuseTexture = new Texture('/2k_sun.jpeg', scene);
        material.emissiveColor = new Color3(1, 1, 0);
        var sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, scene);
        sphere.material = material;
        
        const earth = CreateSphere('earth', { diameter: 2 }, scene);
        const earthMaterial = new StandardMaterial('earthMaterial', scene);
        earthMaterial.diffuseTexture = new Texture('/2k_earth_daymap.jpeg', scene); // 设置地球贴图
        earth.material = earthMaterial;

        const moon = CreateSphere('moon', { diameter: 0.5 }, scene);
        const moonMaterial = new StandardMaterial('moonMaterial', scene);
        moonMaterial.diffuseTexture = new Texture('/2k_moon.jpeg', scene); // 设置月球贴图
        moon.material = moonMaterial;

        // 设置行星的位置和旋转
        earth.position.x = 10;
        moon.position.x = 12;
        moon.parent = earth;
        
        
        
        engine.runRenderLoop(() => {
            scene.render();
        });
        return () => {
            engine.dispose();
        };
    },[])
    
    return <canvas  ref={canvas} width={window.innerWidth} height={window.innerHeight}/>
}

export default dynamic(()=>{
    return new Promise<FunctionComponent>((res,rej)=>{
        res(Babylon)
    })
},{ssr:false})