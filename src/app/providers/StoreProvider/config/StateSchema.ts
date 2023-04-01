import {AxiosInstance} from 'axios';
import {DriverSchema, DriversSchema} from '~entities/Driver';

export interface StateSchema {
  drivers: DriversSchema;
  driver: DriverSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
