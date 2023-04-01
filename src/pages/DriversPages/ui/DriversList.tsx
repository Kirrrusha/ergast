import React, {useMemo} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import {Driver, DriverItem} from '~entities/Driver';
import styles from './DriverList.style';

type Props = {
  list: Driver[];
  onScroll: () => void;
  onUpdate: () => void;
  isLast: boolean;
};

export const DriversList = ({list, onScroll, onUpdate, isLast}: Props) => {
  const renderEmpty = useMemo(
    () => (
      <View style={styles.emptyText}>
        <Text>No Data at the moment</Text>
        <Button onPress={() => onUpdate()} title="Refresh" />
      </View>
    ),
    [onUpdate],
  );

  const renderFooter = useMemo(
    () => (
      <View style={styles.footerText}>
        {isLast ? (
          <Text>No more items at the moment</Text>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    ),
    [isLast],
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => <DriverItem {...item} />}
        keyExtractor={item => item.driverId}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReachedThreshold={0.2}
        onEndReached={onScroll}
      />
    </SafeAreaView>
  );
};
