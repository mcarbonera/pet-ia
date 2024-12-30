import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'rgb(201, 221, 255)',
    padding: 20
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(132, 21, 157)',
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 16,
    color: 'rgb(153, 50, 255)',
    fontStyle: 'italic',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(246, 230, 255)',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgb(55, 0, 86)',
    marginBottom: 20
  },
  button: {
    backgroundColor: 'rgb(75, 111, 255)',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    width: '100%'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'rgb(246, 230, 255)'
  },
  card: {
    borderWidth: 1,
    backgroundColor: 'rgb(246, 230, 255)',
    marginTop: 30,
    width: '100%',
    borderRadius: 10,
    padding: 20,
    borderColor: 'rgb(55, 0, 86)'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(55, 0, 86)',
    marginBottom: 10
  },
  cardText: {
    fontSize: 16,
    color: 'rgb(85, 0, 242)'
  }
})

export default styles;