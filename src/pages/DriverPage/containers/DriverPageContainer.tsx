import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StateSchema} from '~app/providers/StoreProvider';
import {SingleDriver} from '../ui/SingleDriver/SingleDriver';
import {Alert, View, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch} from '~shared/libs/hooks/useAppDispatch/useAppDispatch';
import {clearDriver, getDriverById} from '~entities/Driver';
import {RouteParams} from '~app/navigation';
import styles from './DriverPageConteiner.style';

export const DriverPageContainer = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {params} = useRoute<RouteParams['route']>();
  const data = useSelector((state: StateSchema) => state.driver.data);
  const isLoading = useSelector((state: StateSchema) => state.driver.isLoading);
  const error = useSelector((state: StateSchema) => state.driver.error);

  useEffect(() => {
    const driverId = params.driverId;
    dispatch(getDriverById(driverId));

    return () => {
      dispatch(clearDriver());
    };
  }, [dispatch, params.driverId]);

  if (!isLoading && !!error) {
    // add onPress go back
    Alert.alert('Alert', "Didn't get data", [
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
    return <View />;
  }

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return data ? <SingleDriver {...data} /> : <View />;
};
