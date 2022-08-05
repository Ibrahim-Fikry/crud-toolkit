import {createSlice} from '@reduxjs/toolkit'
// import Posts from './../components/Posts';


let postsslice= createSlice({
    
    name:'posts',
    initialState:{
        items:[]
    },
    reducers:{
        addposts:function(state,action){
            
            state.items.unshift(action.payload)
        },
        deletpost:function(state,action){
             
             state.items=state.items.filter((item) => item.id !==action.payload.id)
            //  state.items.splice(action.payload.id ,0)

            }
    },
})

export const {addposts,deletpost} = postsslice.actions
export default postsslice.reducer