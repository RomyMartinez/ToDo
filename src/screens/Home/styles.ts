import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#403D3B',
  },
  heading: {
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    padding: 24,
    height: 175,
  },
  title: {
    color: '#F2E2C4',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: -30,
  },
  info: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 3,
    marginTop: 24,
    borderBottomWidth: 1,
    borderColor: '#736D6A',
    width: 360,
  },

  list: {
    flex: 1,
    marginTop: 24,
    gap: 8,
  },
})
