import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  driver: {driverId: string} | undefined;
};

export type ParamList = {
  driver: {
    driverId: string;
  };
};

export type RouteParams = {
  route: RouteProp<ParamList, 'driver'>;
  navigation: any;
};
