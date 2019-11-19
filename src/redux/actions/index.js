import {FETCH_POSTS,ADD_PoST,DELETE_POST,UPDATE_POST} from './types'
import {firestore} from '../../firebase/firebase'


const FETCH_POSTS_ERROR= (error) => ({ type: 'FETCH_POSTS_ERROR', error: error })
const FETCH_POSTS_PENDING = () => ({ type: 'FETCH_POSTS_PENDING' })


export const fetchPosts =() =>async dispatch=>{
    dispatch(FETCH_POSTS_PENDING());
    try{
        const ref = await firestore.collection('posts').get()

        const posts= ref.docs.map( doc => ({ id: doc.id, ...doc.data() }))
       console.log(posts)
         dispatch({
             type:FETCH_POSTS,
             payload:posts
         })

    }catch(error){
        dispatch(FETCH_POSTS_ERROR(error));
    }

}

export const deletePost =(id)=> async dispatch=>{
    dispatch(FETCH_POSTS_PENDING());
    try {
        await firestore.doc(`posts/${id}`).delete()
        dispatch({
            type:DELETE_POST
        })
    } catch (error) {
        dispatch(FETCH_POSTS_ERROR(error));
    }

}

