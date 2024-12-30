interface IAnimal {
  raca: string,
  peso: string;
}

interface IGato extends IAnimal {};
interface ICachorro extends IAnimal {};

const gatos: IGato[] = [
  {
    raca: 'Doméstico',
    peso: '3,6 a 4,5'
  },
  {
    raca: 'Himalaia',
    peso: '3,2 a 5,4'
  },
  {
    raca: 'Maine Coon',
    peso: '4,5 a 11,3'
  },
  {
    raca: 'Persa',
    peso: '3,2 a 5,4'
  },
  {
    raca: 'Siamês',
    peso: '3,2 a 4,5'
  }
];

const cachorros: ICachorro[] = [
  {
    raca: 'Pastor Australiano',
    peso: '18,1 a 29,5'
  },
  {
    raca: 'Beagle',
    peso: '9,1 a 10'
  },
  {
    raca: 'Boxer',
    peso: '25 a 36,3'
  },
  {
    raca: 'Cairn Terrier',
    peso: '5,9 a 7,4'
  },
  {
    raca: 'Cano Corso',
    peso: '38,6 a 49,9'
  },
  {
    raca: 'Cardigan Welch Corgis',
    peso: '11,3 a 17,2'
  },
  {
    raca: 'Padrão Dachshund',
    peso: '7,3 a 14,5'
  },
  {
    raca: 'Doberman Pinscher',
    peso: '27,2 a 45,4'
  },
  {
    raca: 'Bulldog Francês',
    peso: '7,3 a 12,7'
  },
  {
    raca: 'Pastor Alemão',
    peso: '22,6 a 40,8'
  },
  {
    raca: 'Do Grande Dane',
    peso: '49,9 a 79,4'
  },
  {
    raca: 'Lhasa Apso',
    peso: '5,4 a 8,2'
  },
  {
    raca: 'Pembroke Welsh Corgis',
    peso: '10 a 13,6'
  },
  {
    raca: 'Miniatura Poodle',
    peso: '4,5 a 6,8'
  },
  {
    raca: 'Labrador Retriever',
    peso: '25 a 36,3'
  },
  {
    raca: 'Retreiver Dourado',
    peso: '25 a 36,3'
  },
  {
    raca: 'Rottweiler',
    peso: '36,3 a 61,2'
  },
  {
    raca: 'Shih Tzu',
    peso: '4,1 a 7,3'
  },
  {
    raca: 'Spaniel Clumber',
    peso: '25 a 38,6'
  },
  {
    raca: 'Yorkshire Terrier',
    peso: '1,8 a 3,2'
  },
];

const normalizeText = (text: string) => {
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  return text.replaceAll(/[^a-z0-9]/gi,"");
}

const montaResposta = (animal: IAnimal) => {
  return `O peso de um ${animal.raca} é ${animal.peso} Kg.`
}

const buscaAnimal = (lista: IAnimal[], nome: string, defaultValue: string) => {
  let match = lista.filter(animal => normalizeText(animal.raca) === normalizeText(nome))
  if(match.length > 0) {
    return montaResposta(match[0]);
  } else {
    return defaultValue;
  }
}

export const PetService = {
  pesoMedioCachorro: (nome: string) => { 
    return buscaAnimal(cachorros, nome, 'O peso médio de um cachorro é de 15 Kg.')
  },
  pesoMedioGato: (nome: string) => { 
    return buscaAnimal(gatos, nome, 'O peso médio de um gato é de 5 Kg.')
  }
}