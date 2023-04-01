import {DriverListPayload, FullDriver} from './driver';

export interface DriversSchema extends DriverListPayload {
  isLoading: boolean;
  error: string | null;
}

export interface DriverSchema {
  data: FullDriver | null;
  isLoading: boolean;
  error: string | null;
}
