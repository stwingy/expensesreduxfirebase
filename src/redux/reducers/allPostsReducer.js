import {FETCH_POSTS,DELETE_POST,UPDATE_POST} from '../actions/types'

const initialState = {pending:false,posts:[],error:null}
function allPostsReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_POSTS_PENDING':
            console.log("pending")
            return state ={...state,pending:true}
        case FETCH_POSTS:
            return state={...state,posts:action.payload,pending:false}
            case DELETE_POST:
                const newPosts =state.posts.filter(p=>p.id !==action.payload)
                return state={...state,posts:newPosts,pending:false}
            case 'FETCH_POSTS_ERROR':
                    return state={
                        ...state,
                        pending: false,
                        error: action.error
                    }
     
        default:
            return state;
    }
}

export default allPostsReducer



