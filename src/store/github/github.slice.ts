import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_FAV_KEY = 'rfk'

interface GithubState {
  favourits: string[]
}

const initialState: GithubState = {
  favourits: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const gitHubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourits.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourits))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourits = state.favourits.filter(f => f !== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourits))
    },
  }
})

export const gitgubActions = gitHubSlice.actions
export const gitgubReducer = gitHubSlice.reducer
