import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    // alignItems: 'center',
  },
  details: {
    justifyContent: 'center',
    marginLeft: 10,
    flexDirection: 'column',
    // flexShrink: 1,
    width: '70%',
  },
  image: {
    width: 75,
    height: 75,
  },
  artist: {
    color: 'grey',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 19,
  },
});

export default styles;
