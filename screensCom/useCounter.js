import React,{useState} from 'react';

export function useCount(nam){
 const [count,setCount] = useState(nam);
 const addCount = () => {
    setCount(prev=>prev+1)
 }

 const resetCount= () => {
    setCount(nam);
 }

 return [count,addCount,resetCount];
}