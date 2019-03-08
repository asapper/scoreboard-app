import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  playerRowContent: {
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    elevation: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  playerData: {
    flex: 9,
    flexDirection: 'row',
  },
  playerAvatar: {
    flex: 1,
    marginRight: 10,
    backgroundColor: 'steelblue'
  },
  playerTextInfo: {
    flex: 3,
    fontSize: 35,
    alignSelf: 'center',
  },
  playerScore: {
    textAlign: 'right',
  },
  moreIcon: {
    flex: 1,
  }
});