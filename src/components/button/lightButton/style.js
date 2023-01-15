import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#363636',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerActive: {
    flex: 1,
    backgroundColor: '#efd967',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 3,
    width: 80,
    height: 85,
    position: 'center',
    top: 300,
    borderRadius: '20%',
    borderColor: '#ffff',

    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 3
    }

  },
  powerLogo: {
    width: '60%',
    height: '60%',
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
    borderRadius: '50%',
    tintColor: 'white',
  },
}); 