import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    isHidden: true,
    navtitle: "JamboMama",
    error: ""
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setNavbarTitle: (state, action) => {
            state.navtitle = action.payload
        },
        setIsHidden: (state, action) => {
            state.isHidden = action.payload
        }
    }
})

export const { setNavbarTitle, setIsHidden } = navbarSlice.actions

export default navbarSlice.reducer