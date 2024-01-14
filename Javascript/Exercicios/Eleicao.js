// Enum para representar os candidatos
enum Candidatos {
  Candidato1 = "Candidato 1",
  Candidato2 = "Candidato 2",
  Candidato3 = "Candidato 3",
}

class Eleicao {
  private candidatos: Record<Candidatos, number>;

  constructor() {
    this.candidatos = {
      [Candidatos.Candidato1]: 0,
      [Candidatos.Candidato2]: 0,
      [Candidatos.Candidato3]: 0,
    };
  }

  votar(candidato: Candidatos): void {
    if (this.candidatos.hasOwnProperty(candidato)) {
      this.candidatos[candidato]++;
      console.log(`Voto registrado para ${candidato}`);
    } else {
      console.log("Candidato inválido.");
    }
  }

  exibirResultados(): void {
    console.log("Resultados da Eleição:");
    for (const candidato in this.candidatos) {
      console.log(`${candidato}: ${this.candidatos[candidato]} votos`);
    }
  }
}

// Exemplo de uso
const eleicao = new Eleicao();

eleicao.votar(Candidatos.Candidato1);
eleicao.votar(Candidatos.Candidato2);
eleicao.votar(Candidatos.Candidato1);
eleicao.votar(Candidatos.Candidato3);
eleicao.votar(Candidatos.Candidato2);
eleicao.votar(Candidatos.Candidato3);

eleicao.exibirResultados();
