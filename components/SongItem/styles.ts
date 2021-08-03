import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    // width: '100%',
    paddingBottom: 80,
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
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1CD05D',
    width: 175,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});

export default styles;
