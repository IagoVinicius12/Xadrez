import { useState } from "react";
import { JSX } from "react";
import './home.css'
import { Rei, Rainha, Torre, Cavalo, Peao, Bispo } from "../Components/Pecas";
import { iniciando_mapa_ocupacao, iniciando_tabuleiro } from "../Function/Preencher";
import { verificar_movimento_bispo } from "../Function/Movements";

type Casa = {
  cor: string | null;
  peca: string | null;
}

const casa_vazia = { cor: null, peca: null }

export type Tabuleiro = Casa[][]
export type mapa_ocupacao = number[][]
export type Par = [number, number]


const preencher_tabuleiro = (): Tabuleiro => {
  const tabuleiro: Tabuleiro = Array(8).fill(null).map(() =>
    Array(8).fill(null).map(() =>
      ({ ...casa_vazia })));
  return iniciando_tabuleiro(tabuleiro)
}

const handleCasa = (casa: Casa): JSX.Element | null => {
  switch (casa.peca?.toLowerCase()) {
    case 'rei':
      return <Rei color={casa.cor} />;
    case 'rainha':
      return <Rainha color={casa.cor} />;
    case 'torre':
      return <Torre color={casa.cor} />;
    case 'bispo':
      return <Bispo color={casa.cor} />;
    case 'cavalo':
      return <Cavalo color={casa.cor} />;
    case 'peao':
      return <Peao color={casa.cor} />;
    default:
      return null;
  }
};
// const printar=(test:Par[])=>{
//   for(let i=0;i<test.length;i++){
//     console.log(test[i])
//     console.log(test.length)
//   }
// }


function Home() {

  const [tabuleiro, setTabuleiro] = useState<Tabuleiro>(preencher_tabuleiro)
  const preencher_mapa_ocupacao = (): mapa_ocupacao => {
    const mapa: mapa_ocupacao = Array(8).fill(null).map(() => Array(8).fill(0))
    return iniciando_mapa_ocupacao(tabuleiro, mapa);
  }
  const [mapa_ocupacao, setMapaOcupacao] = useState<mapa_ocupacao>(preencher_mapa_ocupacao)
  const celula: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const linha: string[] = ['1', '2', '3', '4', '5', '6', '7', '8']
  const [casa_clicada, setCasa_clicada] = useState<Par>([0, 0])
  const [count, setCount] = useState<number>(0)

  const handleFirstClick = (par: Par) => {
    setCasa_clicada([par[0], par[1]])
    let test:Par[]=[]
    test=verificar_movimento_bispo(tabuleiro,par)
    console.log(par)
    if(test.length>=1){
      setCount(1)
    }
    else{
      setCount(0)
    }
  }
  const handleMovement = (par1: Par, par2: Par, peca:string|null,cor:string|null): Tabuleiro => {
    let tab: Tabuleiro = tabuleiro
    tab[par2[0]][par2[1]].peca = peca;
    tab[par2[0]][par2[1]].cor = cor;
    tab[par1[0]][par1[1]].peca = null;
    setCasa_clicada([0,0])
    setCount(0)
    return tab
  }

  return (
    <div className="tela">
      <div className="tabuleiro">
        {linha.map((_, i) => (
          <div className="linha" key={i}>
            {celula.map((_, j) => (
              <div className="celula" key={`${i}-${j}`} 
              style={{ backgroundColor: (j + i) % 2 == 0 ? 'white' : '#763821' }} 
              onClick={count === 0 ? () => handleFirstClick([i, j]) :()=> handleMovement([casa_clicada[0], casa_clicada[1]], [i, j], tabuleiro[casa_clicada[0]][casa_clicada[1]].peca, tabuleiro[casa_clicada[0]][casa_clicada[1]].cor)}>
                {handleCasa(tabuleiro[i][j])}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home