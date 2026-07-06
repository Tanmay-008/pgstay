export interface Room {
  _id: string;
  City: string;
  Price: number;
  amenities: string;
  images: string[];
  image?: string;
  status: "available" | "booked" | "unavailable" | string;
  userId: string;
  videoUrl?: string; 
  __v?: number;
}

export interface RoomState {
  roomInfo: Room[];
}
