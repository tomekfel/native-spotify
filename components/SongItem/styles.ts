import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
  },
  image: {
    width: '90%',
    aspectRatio: 1 / 1,
    marginTop: 30,
  },
  artist: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  button: {
    margin: 20,
  },
  details: {
    justifyContent: 'flex-end',
    marginTop: 70,
  },
});

export default styles;
