export interface Driver {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface FullDriver extends Driver {
  permanentNumber?: string;
  code?: string;
  series: string;
}

export type DriverListPayload = {
  list: Driver[];
  limit: number;
  offset: number;
  total: number;
};

export type DriverListParams = {
  limit: number;
  offset: number;
};
