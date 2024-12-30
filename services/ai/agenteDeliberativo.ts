import { PetService } from "../api/petService";
import Agente from "./Agente";

export async function responderGenitorDePet(pergunta: string) {
  return await consultaAgentePetMaster(pergunta)
}

function pesoMedioCachorro(nome: string) {
  return PetService.pesoMedioCachorro(nome);
}

function pesoMedioGato(nome: string) {
  return PetService.pesoMedioGato(nome);
}

interface IAcoes {
  peso_medio_cachorro: (nome: string) => string,
  peso_medio_gato: (nome: string) => string
}
const acoesDoAgente: IAcoes = {
  "peso_medio_cachorro": pesoMedioCachorro,
  "peso_medio_gato": pesoMedioGato
}

const acaoRegex = /^\*\*Ação:\*\* (?<acao>\w+): (?<inputAcao>.*)$/i;

async function consultaAgentePetMaster(pergunta: string, maxTurns=10) {
  var i = 0
  var bot = new Agente()
  
  var nextPrompt = pergunta
  var ultimaResposta = '';
  while(i < maxTurns) {
    i++;
    var resultado = await bot.call(nextPrompt)
    ultimaResposta = resultado
    console.log(resultado)

    var acoes = resultado.split('\n').filter((frase: string) => {
      return acaoRegex.test(frase)
    }).map((frase: string) => {
      return frase.match(acaoRegex);
    })
    if(acoes.length > 0) {
      var {acao, inputAcao} = acoes[0].groups
      if(!(Object.keys(acoesDoAgente).includes(acao))) {
        return `Ação Desconhecida: ${acao}: ${inputAcao}`
      }
      console.log(` -> Rodando ${acao} ${inputAcao}`)
      let observacao = acoesDoAgente[acao as keyof typeof acoesDoAgente](inputAcao);
      console.log(`Observação: ${observacao}`)
      nextPrompt = `Observação: ${observacao}`
    } else {
      return ultimaResposta
    }
  }
  // Agente entrou em loop ou pergunta foi muito grande.
  return 'O bot deu TILT.'
}