import Calculo from "./calculo";

export default class Processamento{
    processar(calculo: Calculo){
        console.log(`Distância de pouso: ${calculo.calcular()}`);
        
    }
}