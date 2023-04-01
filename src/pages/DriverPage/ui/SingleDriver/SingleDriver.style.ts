import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    overflow: 'visible',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderWidth: 2,
    borderColor: 'thistle',
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: 'auto',
    fontSize: 20,
  },
  value: {
    fontSize: 20,
  },
});
