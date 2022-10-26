import React, { useEffect, useState } from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Mine=(props:{mine:string|number})=>{
    let [type,setType]=useState<'unfind'|'error'|'find'>('unfind')
    function renderItem(){
        switch (type){
            case 'unfind':
            return <Box onClick={click} sx={{ flexGrow: 1,height:'100px',alignItems:'center',display:'flex',justifyContent:'center',background:'yellow' }}></Box>
            case 'error':
            return <Box sx={{ flexGrow: 1,height:'100px',alignItems:'center',display:'flex',justifyContent:'center',color:'red' }}>{props.mine}</Box>
            case 'find':
            return <Box sx={{ flexGrow: 1,height:'100px',alignItems:'center',display:'flex',justifyContent:'center',color:'green' }}>{props.mine}</Box>
        }
    }
    function click(){
        if(props.mine==='雷'){
            setType('error')
        }else{
            setType('find')
        }
    }
    return (
        <Grid item xs={1}>
            {renderItem()}
        </Grid>
    )
}
const Index = () => {
    let [mine,setMine]=useState<Array<Array<string|number>>>([])
    function getMine(w:number,l:number,c:number){
        let mm:Array<Array< string | number > >=[]
        let map=new Map<number,number[]>()
        let k=0;
        for(let i=0;i<l;i++){
            mm[i+1]=[]
            for(let j=0;j<w;j++){
                map.set(k,[i+1,j+1])
                k++
            }
        }
        mm[0]=[]
        mm[l+1]=[]
        while(c>0){
            let keys=Array.from(map.keys())
            let ind=Math.floor(Math.random()*(keys.length))
            let [ww,ll]=map.get(keys[ind]) as number[]
            mm[ww][ll]='雷'
            map.delete(keys[ind])
            c--
        }
        let arr=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]]
        for(let i=1;i<l+1;i++){
            for(let j=1;j<w+1;j++){
                
                if(mm[i][j]!=='雷'){
                    let n=0
                    arr.map((v)=>{
                        if(mm[i+v[0]][j+v[1]]==='雷'){
                            n++
                        }
                    })
                    mm[i][j]=n
                }
                
            }
        }
        setMine(mm)
        console.log(mm)
    }
    useEffect(()=>{
        getMine(12,6,9)
    },[])
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {mine.map((v,i)=>{
                return v.map((item, j)=>{
                    return (
                        <Mine mine={item} key={`${i}${j}`}></Mine>
                    )
                })
            })}
        </Grid>
      </Box>
    )
  }
  
  export default Index