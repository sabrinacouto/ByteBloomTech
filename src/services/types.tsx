
  //Define os três idiomas do componente SelectorLanguage (português, inglês e espanhol) 
  export enum Languages {
    pt = 'pt',
    en = 'en',
    es = 'es',
  }

// Define uma interface para os textos do menu que irão mudar conforme a linguagem selecionada
 export interface MenuTexts {
    accessibility: string;
    content: string;
    textUp: string;
    disableImages:string;
    enableImages:string;
    contrastOff: string;
    contrastOn: string;
    enableAudio: string;
    disableAudio: string;
  }
  // Define uma interface para as reqs da Api ViaCep
 export interface Address {
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
  }

// INTERFACE DA API CONTACLIENTE
  export interface ContaCliente {
    nome: string;
    sobrenome: string;
    cargo: string;
    nomeEmpresa: string;
    telefone: string;
    email: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    senha: string;
  }