import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 48,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
  details: {
    justifyContent: 'center',
    marginLeft: 10,
    flexDirection: 'column',
  },
  artist: {
    color: 'grey',
    fontSize: 13,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  playerContainer: {
    height: 75,
    width: 75,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    paddingTop: 17,
  },
  progressBar: {
    height: 2,
    backgroundColor: 'blue',
  },
});

export default styles;
