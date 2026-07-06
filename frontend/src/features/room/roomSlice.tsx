
import type { Room, RoomState } from "@/types/types";
import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

const initialState: RoomState = {
  roomInfo: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState:initialState,
  reducers: {
    addRoomInfo: (state, action: PayloadAction<Room []>) => {
      state.roomInfo.push(...action.payload); 
    },
    setRoomList: (state, action: PayloadAction<Room[]>) => {
      state.roomInfo = action.payload; 
    },
    clearRooms: (state) => {
      state.roomInfo = []; 
    },
  },
});

export const { addRoomInfo, setRoomList, clearRooms } = roomSlice.actions;
export default roomSlice.reducer;
