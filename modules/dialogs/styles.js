import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formInput: {
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    flex: 5,
    padding: 20,
    paddingLeft: 25,
  },
  heading: {
    paddingTop: '8%',
    paddingBottom: '8%',
    fontWeight: 'bold',
    fontSize: 16
  },
  radioButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '1%',
    paddingHorizontal: '5%',
  },
  radioButtonText: {
    flex: 3,
    fontSize: 16
  },
  blockIcon: {
    flex: 1
  },
  content: {
    marginTop: 25,
    flexDirection: 'row'
  },
  contentHeader: {
    fontWeight: 'bold'
  },
  contentText: {
    fontSize: 20
  }
});