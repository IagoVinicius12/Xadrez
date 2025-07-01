import { useState } from "react";
import { JSX } from "react";
import './home.css'
import { Rei, Rainha, Torre, Cavalo, Peao, Bispo } from "../Components/Pecas";
import { iniciando_tabuleiro } from "../Function/Preencher";

type Casa = {
    cor: string | null;
    peca: string | null;
}

const casa_vazia = { cor: null, peca: null }

export type Tabuleiro = Casa[][]
type mapa_ocupacao=number[][]

const preencher_mapa_ocupacao=():mapa_ocupacao=>{
  const mapa:mapa_ocupacao=Array(8).fill(null).map(()=>Array(8).fill(0))
  return mapa;
}

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


function Home() {

    const [tabuleiro, setTabuleiro] = useState<Tabuleiro>(preencher_tabuleiro)
    const [mapa_ocupacao,setMapaOcupacao]=useState<mapa_ocupacao>(preencher_mapa_ocupacao)
    const celula: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const linha: string[] = ['1', '2', '3', '4', '5', '6', '7', '8']
    return (
        <div className="tela">
            <div className="tabuleiro">
                {linha.map((_, i) => (
                    <div className="linha" key={i}>
                        {celula.map((_, j) => (
                            <div className="celula" key={`${i}-${j}`} style={{ backgroundColor: (j + i) % 2 == 0 ? 'white' : 'black' }}>
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