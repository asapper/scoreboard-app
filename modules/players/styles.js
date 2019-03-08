import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  playerListContainer: {
    marginTop: 10,
    paddingBottom: 50
  },  
  playerRowContent: {
    marginTop: 10,
    marginBottom: 10,
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
    backgroundColor: 'lightgrey'
  },
  playerAvatarHighScore: {
    backgroundColor: 'gold'
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