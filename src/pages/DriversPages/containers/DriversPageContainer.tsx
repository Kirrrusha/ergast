import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StateSchema} from '~app/providers/StoreProvider';
import {DriversList} from '../ui/DriversList';
import {getDriversList} from '~entities/Driver';
import {useAppDispatch} from '~shared/libs/hooks/useAppDispatch/useAppDispatch';
import {Alert, View} from 'react-native';

export const DriversPageContainer = () => {
  const dispatch = useAppDispatch();
  const list = useSelector((state: StateSchema) => state.drivers.list);
  const error = useSelector((state: StateSchema) => state.drivers.error);
  const isLoading = useSelector(
    (state: StateSchema) => state.drivers.isLoading,
  );
  const {limit, offset, total} = useSelector((state: StateSchema) => ({
    limit: state.drivers.limit,
    offset: state.drivers.offset,
    total: state.drivers.total,
  }));

  useEffect(() => {
    dispatch(getDriversList({limit, offset}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const isLast = list.length === total;

  const handleScroll = () => {
    dispatch(getDriversList({limit: limit + 30, offset: offset + 30}));
  };

  const onUpdate = () => {
    dispatch(getDriversList({limit, offset}));
  };

  if (!isLoading && !!error) {
    // add onPress go back
    Alert.alert('Alert', "Didn't get data");
    return <View />;
  }

  return (
    <DriversList
      list={list}
      onScroll={handleScroll}
      onUpdate={onUpdate}
      isLast={isLast}
    />
  );
};
