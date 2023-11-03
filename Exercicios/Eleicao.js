// Simulação de uma eleição com 3 candidatos em JavaScript

class Eleicao {
    constructor() {
      this.candidatos = {
        "Candidato 1": 0,
        "Candidato 2": 0,
        "Candidato 3": 0,
      };
    }
  
    votar(candidato) {
      if (this.candidatos.hasOwnProperty(candidato)) {
        this.candidatos[candidato]++;
        console.log(`Voto registrado para ${candidato}`);
      } else {
        console.log("Candidato inválido.");
      }
    }
  
    exibirResultados() {
      console.log("Resultados da Eleição:");
      for (const candidato in this.candidatos) {
        console.log(`${candidato}: ${this.candidatos[candidato]} votos`);
      }
    }
  }
  
  // Exemplo de uso
  const eleicao = new Eleicao();
  
  eleicao.votar("Candidato 1");
  eleicao.votar("Candidato 2");
  eleicao.votar("Candidato 1");
  eleicao.votar("Candidato 3");
  eleicao.votar("Candidato 2");
  eleicao.votar("Candidato 3");
  
  eleicao.exibirResultados();  