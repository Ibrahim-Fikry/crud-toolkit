import {createSlice} from '@reduxjs/toolkit'


let postsslice= createSlice({
    
    name:'posts',
    initialState:{
        items:[]
    },
    reducers:{
        addposts:function(state,action){
            // console.log(state.posts[0]);
            state.items.unshift(action.payload)
        }
    },
})

export const {addposts} = postsslice.actions
export default postsslice.reducer