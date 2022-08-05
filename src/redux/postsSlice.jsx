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
            //  let index= this.state.items.indexOf(state.items[)
            //  console.log(action.payload.id);
            //  console.log(index);
            //   state.items.splice(index ,0)

            },
        updatepost:function(state,action){
            state.items.map(item =>{ 
                if(item.id==action.payload.id){
                    item.title=action.payload.title 
                    item.discribtion=action.payload.discribtion
                    
                    
                }   
              
            })
        
        },
    },
})

export const {addposts,deletpost,updatepost} = postsslice.actions
export default postsslice.reducer