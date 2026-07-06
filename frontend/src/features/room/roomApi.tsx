import {  axiosAPI } from "@/lib/axios"

export const featchRooms=async()=>  axiosAPI.get("/room/Rooms");
export const featchRoom =(city:string)=> axiosAPI.post(`/room/Rooms/Search?city=${city}`)
  


