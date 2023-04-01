import {createSlice} from '@reduxjs/toolkit';
import {getDriversList} from '../actions/actions';
import {DriversSchema} from '../types/schemas';

const initialState: DriversSchema = {
  isLoading: false,
  error: null,
  list: [],
  limit: 30,
  offset: 0,
  total: 0,
};

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDriversList.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDriversList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.list = action.payload.list;
        state.limit = action.payload.limit;
        state.offset = action.payload.offset;
        state.total = action.payload.total;
      })
      .addCase(getDriversList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });
  },
});

export const {reducer: driversSliceReducer} = driversSlice;
