import React from 'react'
import {firestore} from './firebase'
 //import { connect } from "react-redux";
 import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from '../redux/actions'
function Fb() {
  const posts = useSelector((store) => store.allPostsReducer.posts);
  const dispatch = useDispatch();
  const getAllPosts = () => dispatch(fetchPosts());
  React.useEffect(()=>{
    if(posts) console.log(posts)
   
  })
    const [data,setData]=React.useState([])
    const O={
        people:2,
        married:true
    }
    const handleCreate = async post => {
        const docRef = await firestore.collection('posts').add(post);
        const doc = await docRef.get();
      
        const newPost = {
          id: doc.id,
          ...doc.data(),
        };
      
      setData([...data,newPost])
        
      };
      const handleEdit =async id=>{
       await firestore
        .collection('posts')
        .doc(id)
        .update({ people:1,married:false});
     const docRef= await firestore
     .collection('posts')
     .doc(id)
     const doc = await docRef.get();
     const newPost = {
        id: doc.id,
        ...doc.data(),
      };
      console.log(newPost)
      }
      const handleRemove = async (id) => { 
        //const allPosts = this.state.posts;
      
        //const posts = allPosts.filter(post => id !== post.id);
      
        //await firestore.doc(`posts/${id}`).delete();
      
      //this.setState({ posts });
      await dispatch(deletePost(id))
      dispatch( fetchPosts())
      };
    return (
        <div>
        {posts && posts.map(p=><button onClick ={()=>handleRemove(p.id)}>{p.people}</button>)}
          <button onClick ={()=>{getAllPosts()}}>new</button>
            <button onClick ={()=>handleCreate(O)}>press</button>
            <button onClick ={()=>handleEdit(data[0].id)}>press</button>
        </div>
    )
}

export default Fb
