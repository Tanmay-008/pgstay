// import { useEffect, useState } from "react";
// import { featchRoom } from "@/features/room/roomApi";

// export function useDebounced(city: string, delay: number = 600) {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!city.trim()) {
//       setData([]);
//       return;
//     }

//     const handler = setTimeout(async () => {
//       try { 
//         setLoading(true);
//         const res = await featchRoom(city);
//         setData(res.data);
//       } catch (err) {
//         setError("Failed to fetch rooms");
//       } finally {
//         setLoading(false);
//       }
//     }, delay);

//     return () => clearTimeout(handler); 
//   }, [city, delay]);

//   return { data, loading, error };
// }

import { useEffect, useState } from "react";
import React from 'react'

function useDebounced(fn:()=>void,delay:number=500) {
    setTimeout(()=>{
      fn()
    },delay)
}

useDebounced(()=>{
     return "hello world"
},1000);

export default useDebounced