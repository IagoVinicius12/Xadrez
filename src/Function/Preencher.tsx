import { Tabuleiro,mapa_ocupacao } from "../Pages/Home";

export function iniciando_tabuleiro(tabuleiro: Tabuleiro): Tabuleiro {
    tabuleiro[0][0] = { cor: 'black', peca: 'Torre' ,peca_pode_mover:false};
    tabuleiro[0][7] = { cor: 'black', peca: 'Torre' ,peca_pode_mover:false};
    tabuleiro[0][1] = { cor: 'black', peca: 'Cavalo' ,peca_pode_mover:false};
    tabuleiro[0][6] = { cor: 'black', peca: 'Cavalo' ,peca_pode_mover:false};
    tabuleiro[0][2] = { cor: 'black', peca: 'Bispo' ,peca_pode_mover:false};
    tabuleiro[0][5] = { cor: 'black', peca: 'Bispo' ,peca_pode_mover:false};
    tabuleiro[0][4] = { cor: 'black', peca: 'Rei' ,peca_pode_mover:false};
    tabuleiro[0][3] = { cor: 'black', peca: 'Rainha' ,peca_pode_mover:false};
    for (let i = 0; i < 8; i++) {
        tabuleiro[1][i] = { cor: 'black', peca: 'Peao' ,peca_pode_mover:false}
        tabuleiro[6][i] = { cor: 'white', peca: 'Peao' ,peca_pode_mover:false}
    }
    tabuleiro[7][0] = { cor: 'white', peca: 'Torre' ,peca_pode_mover:false};
    tabuleiro[7][7] = { cor: 'white', peca: 'Torre' ,peca_pode_mover:false};
    tabuleiro[7][1] = { cor: 'white', peca: 'Cavalo' ,peca_pode_mover:false};
    tabuleiro[7][6] = { cor: 'white', peca: 'Cavalo' ,peca_pode_mover:false};
    tabuleiro[7][2] = { cor: 'white', peca: 'Bispo' ,peca_pode_mover:false};
    tabuleiro[7][5] = { cor: 'white', peca: 'Bispo' ,peca_pode_mover:false};
    tabuleiro[7][4] = { cor: 'white', peca: 'Rei' ,peca_pode_mover:false};
    tabuleiro[7][3] = { cor: 'white', peca: 'Rainha' ,peca_pode_mover:false};

    return tabuleiro;
}

export function iniciando_mapa_ocupacao(tabuleiro: Tabuleiro, mapa_ocupacao: number[][]):mapa_ocupacao {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (tabuleiro[i][j].cor === null) {
                mapa_ocupacao[i][j]=0
            }
            else{
                mapa_ocupacao[i][j]=1
            }
        }
    }
    return mapa_ocupacao
}