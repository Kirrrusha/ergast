import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StoreProvider} from './providers/StoreProvider';
import {NavigationContainer} from '@react-navigation/native';
import {DriversPage} from '~pages/DriversPages';
import {DriverPage} from '~pages/DriverPage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="drivers"
            component={DriversPage}
            options={{
              title: 'Drivers list',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
            }}
          />
          <Stack.Screen
            name="driver"
            component={DriverPage}
            options={({route}) => ({
              //@ts-ignore
              title: route.params.driverId,
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
