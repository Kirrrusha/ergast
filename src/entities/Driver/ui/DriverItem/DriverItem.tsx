import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo} from 'react';
import {StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '~app/navigation';
import {Driver} from '~entities/Driver';

export const DriverItem = memo((props: Driver) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {driverId, givenName, familyName} = props;

  const handleRoute = () => {
    navigation.navigate('driver', {driverId});
  };
  return (
    <TouchableOpacity style={styles.item} onPress={handleRoute}>
      <Text style={styles.title}>
        {givenName} {familyName}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
