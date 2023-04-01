import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {ThunkConfig} from '~app/providers/StoreProvider';
import {DriverListParams, DriverListPayload, FullDriver} from '../types/driver';

export const getDriversList = createAsyncThunk<
  DriverListPayload,
  DriverListParams,
  ThunkConfig<string>
>('drivers/getDriversList', async (params, thunkApi) => {
  const {extra, rejectWithValue} = thunkApi;

  try {
    const response = await extra.api.get('/f1/drivers.json', {params});
    if (!response.data) {
      throw new Error();
    }

    return {
      list: response.data.MRData.DriverTable.Drivers,
      limit: +response.data.MRData.limit,
      offset: +response.data.MRData.offset,
      total: +response.data.MRData.total,
    };
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});

export const getDriverById = createAsyncThunk<
  FullDriver,
  string,
  ThunkConfig<string>
>('driver/getDriverById', async (id, thunkApi) => {
  const {extra, rejectWithValue} = thunkApi;

  try {
    const response = await extra.api.get(`/f1/drivers/${id}.json`);
    if (!response.data) {
      throw new Error();
    }

    return {
      ...response.data.MRData.DriverTable.Drivers[0],
      series: response.data.MRData.series,
    };
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});

export const clearDriver = createAction('driver/clear');
