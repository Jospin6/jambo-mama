import {configureStore} from '@reduxjs/toolkit'
import { navbarSlice } from './navbar/navbarSlice'

export const store = configureStore({
    reducer: {
        navbar: navbarSlice.reducer
    }
})

export default store