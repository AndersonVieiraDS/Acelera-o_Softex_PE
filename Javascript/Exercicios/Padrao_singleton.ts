class SistemaSeguranca {

    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senhaSuperSecreta123";
  
    private constructor() {}
  
    public static obterInstancia(): SistemaSeguranca {

      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senhaInserida: string): void {
        
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à base secreta.");
      } else {
        console.log("Acesso negado. Senha incorreta.");
      }
    }
  }
  
  // Programa principal

  const agente = SistemaSeguranca.obterInstancia();
  agente.acessarBaseSecreta("senhaIncorreta"); // Acesso negado. Senha incorreta.
  agente.acessarBaseSecreta("senhaSuperSecreta123"); // Acesso concedido à base secreta.
  