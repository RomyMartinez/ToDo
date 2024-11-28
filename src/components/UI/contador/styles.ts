import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  title: {
    fontSize: 16,
    color: '#0D0D0D',
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 12,
    height: 20,
    color: '#736D6A',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 20,
  },
  done: {
    color: '#736D6A',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
