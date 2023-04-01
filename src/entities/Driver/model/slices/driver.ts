import {createSlice} from '@reduxjs/toolkit';
import {getDriverById, clearDriver} from '../actions/actions';
import {DriverSchema} from '../types/schemas';

const initialState: DriverSchema = {
  isLoading: false,
  error: null,
  data: null,
};

const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDriverById.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDriverById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.data = action.payload;
      })
      .addCase(getDriverById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = String(action.payload);
      })
      .addCase(clearDriver, state => {
        state.data = null;
      });
  },
});

export const {reducer: driverSliceReducer} = driverSlice;
