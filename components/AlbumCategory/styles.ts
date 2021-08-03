import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // paddingBottom: 80,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#1CD05D',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;
