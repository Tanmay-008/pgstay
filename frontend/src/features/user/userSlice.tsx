import { createSlice ,nanoid} from '@reduxjs/toolkit'


const initialState = {
    UserInfo:null,
};

// interface UserState{
//     UserInfo:UserInot[];
// }

// interface UserInot{
//     _id:string;
//     name:string;
// }

// export const userSlice = createSlice({
//     name: 'user',
//     initialState:{value:0},
//     reducers:{
//         addUserInfo: (state,action):any=> {state.value+=action.payload},
//         removeUserInfo:(state,action)=>{state.value=-1}
//     }
// })

export const userSlice  = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        addUserInfo:(state,action)=>{
            state.UserInfo=action.payload;
        },
        // removeUserInfo:(state,action)=>{
        //     state.UserInfo=state.UserInfo=user._id !== action.payload);
        // },

        updateUserInfo:(state,action)=>{},
        fetchUserInfo:(state,action)=>{}
    }
})


export const {addUserInfo} = userSlice.actions;
export default userSlice.reducer;