import { responderGenitorDePet } from "@/services/ai/agenteDeliberativo";
import styles from "@/styles";
import { Fragment, useState } from "react";
import { SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';

export default function Index() {
  const [pergunta, setPergunta] = useState<string>("");
  const [resposta, setResposta ] = useState<string>("");
  const [isLoading, setIsLoading ] = useState<boolean>(false);

  const callPetIA = async () => {
    if(isLoading) return;
    if(pergunta.length < 5) {
      alert('Desculpe, a pergunta precisa ter mais de 5 caracteres')
      return;
    }

    setIsLoading(true);

    try {
      const result = await responderGenitorDePet(pergunta);
      setResposta(result);
    } catch(error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Fragment>
      <SafeAreaView style={{ flex:1, backgroundColor: 'gray' }}>
        <StatusBar backgroundColor={'rgb(105, 160, 255)'}></StatusBar>
        <View style={styles.container}>
          <Text style={styles.titulo}>PET-IA</Text>
          <Text style={styles.subtitulo}>Guia para genitores de pets</Text>
          <TextInput
            value={pergunta}
            onChangeText={setPergunta}
            style={styles.input}
            placeholder="Pergunte o peso de raças de pets (gato ou cachorro) ..."></TextInput>

          <TouchableOpacity style={styles.button} onPress={callPetIA}>
            <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Buscar peso!"}</Text>
          </TouchableOpacity>

          {
            resposta && (
              <MotiView
                style={styles.card}
                from={{ opacity: 0, translateX: 200 }}
                animate={{ opacity: 1, translateX: 0 }}
              >
                <Text style={styles.cardTitle}>Sua resposta está pronta</Text>
                <Text style={styles.cardText}>{resposta}</Text>
              </MotiView>
            )
          }

        </View>
      </SafeAreaView>
    </Fragment>
  );
}
