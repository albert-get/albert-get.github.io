import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        setPost(state, action) {
            return action.payload
        }
    },
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { setPost } = actions
// Export the reducer, either as a default or named export
export const incrementAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(setPost([1,2,3]))
    }, 1000)
}
export default reducer