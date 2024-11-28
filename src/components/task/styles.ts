import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#736D6A',
    padding: 12,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: 360,
    height: 70,
  },
  done: {
    borderColor: '#0D0D0D',
    borderRadius: 50,
    borderWidth: 2,
    width: 20,
    height: 20,
  },
  taskDone: {
    flex: 1,
    color: '#403D3B',
    fontSize: 14,
    textDecorationLine: 'line-through', // Aplica o risco no texto
    marginLeft: 8,
    marginRight: 18,
  },
  check: {
    backgroundColor: '#0D0D0D',
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    width: 20,
    height: 20,
  },
  checkText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    color: '#BFB6B0',
  },
  delete: {
    height: 30,
    width: 30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  task: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    marginRight: 18,
  },
})
