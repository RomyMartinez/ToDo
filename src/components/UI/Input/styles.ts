import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: -55,
  },
  input: {
    flex: 1,
    borderColor: '#736D6A',
    color: '#0D0D0D',
    backgroundColor: '#736D6A',
    borderRadius: 5,
    padding: 12,
    marginRight: 12,
    height: 56,
  },
  inputHover: {
    flex: 1,
    color: '#0D0D0D',
    borderColor: '#F2E6DF',
    backgroundColor: '#736D6A',
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    marginRight: 12,
    height: 56,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDBFAE',
  },
  buttonText: {
    fontSize: 24,
    color: '#0D0D0D',
  },
})
