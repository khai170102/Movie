import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  movies: {},
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  addMovie:(state,{payload})=>{
      state.movies=payload;
  },
}
})

// Action creators are generated for each case reducer function
export const { addMovie } = movieSlice.actions
export const getAllMovies=state=>state.movies.movies
export default movieSlice.reducer