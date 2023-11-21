interface Pato {
    grasnar(): void;
    voar(): void;
  }
  
  class PatoReal implements Pato {
    grasnar(): void {
      console.log("Quack! Quack!");
    }
  
    voar(): void {
      console.log("Voando como um pato.");
    }
  }
  
  interface Galinha {
    cacarejar(): void;
    voarCurto(): void;
  }
  
  class GalinhaReal implements Galinha {
    cacarejar(): void {
      console.log("Cocoricó!");
    }
  
    voarCurto(): void {
      console.log("Voando curto, apenas alguns metros.");
    }
  }

  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar(); // O grasnar do pato é mapeado para o cacarejo da galinha
    }
  
    voarCurto(): void {
      this.pato.voar(); // O voar do pato é mapeado para o voar curto da galinha
    }
  }
  
  class AdaptadorPatoDemo {
    static mostrar(): void {
      const patoReal: Pato = new PatoReal();
      const adaptadorPato: Galinha = new AdaptadorPato(patoReal);
  
      console.log("Pato real:");
      patoReal.grasnar();
      patoReal.voar();
  
      console.log("\nGalinha adaptada como pato:");
      adaptadorPato.cacarejar();
      adaptadorPato.voarCurto();
    }
  }
  
  AdaptadorPatoDemo.mostrar();
  