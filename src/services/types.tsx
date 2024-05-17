// Define uma interface para os textos do menu
 export interface MenuTexts {
    accessibility: string;
    content: string;
    textUp: string;
    disableImages:string;
    enableImages:string;
    contrastOff: string;
    contrastOn: string;
    audio: string;
  }

  
 export interface Address {
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
  }
  

  export enum Languages {
    pt = 'pt',
    en = 'en',
    es = 'es',
  }