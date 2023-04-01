import React, {useCallback} from 'react';
import {Alert, Button, Linking, ScrollView, Text, View} from 'react-native';
import {FullDriver} from '~entities/Driver';
import style from './SingleDriver.style';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export const SingleDriver = (props: FullDriver) => {
  const {
    series,
    givenName,
    familyName,
    permanentNumber,
    url,
    driverId,
    nationality,
    dateOfBirth,
  } = props;
  return (
    <ScrollView style={style.container}>
      <View style={style.row}>
        <Text style={style.label}>Driver Name</Text>
        <Text style={style.value}>
          {givenName} {familyName}
        </Text>
      </View>
      <View style={style.row}>
        <Text style={style.label}>Series</Text>
        <Text style={style.value}>{series}</Text>
      </View>
      <View style={style.row}>
        <Text style={style.label}>DriverId</Text>
        <Text style={style.value}>{driverId}</Text>
      </View>
      {!!permanentNumber && (
        <View style={style.row}>
          <Text style={style.label}>Permanent Number</Text>
          <Text style={style.value}>{permanentNumber}</Text>
        </View>
      )}
      <View style={style.row}>
        <Text style={style.label}>Nationality</Text>
        <Text style={style.value}>{nationality}</Text>
      </View>
      <View style={style.row}>
        <Text style={style.label}>Information</Text>
        <OpenURLButton url={url}>Biography</OpenURLButton>
      </View>
      <View style={style.row}>
        <Text style={style.label}>Birthday</Text>
        <Text style={style.value}>{dateOfBirth}</Text>
      </View>
    </ScrollView>
  );
};
