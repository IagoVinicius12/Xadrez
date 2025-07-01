import { useState } from "react";
import { JSX } from "react";
import './home.css'
import { Rei, Rainha, Torre, Cavalo, Peao, Bispo } from "../Components/Pecas";

type Casa = {
    cor: string | null;
    peca: string | null;
}

const casa_vazia = { cor: null, peca: null }

type Tabuleiro = Casa[][]

const preencher_tabuleiro = (): Tabuleiro => {
    const tabuleiro: Tabuleiro = Array(8).fill(null).map(() =>
        Array(8).fill(null).map(() =>
            ({ ...casa_vazia })));
    tabuleiro[0][0] = { cor: 'black', peca: 'Rei' }
    return tabuleiro
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
                                {tabuleiro[i][j].peca}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home