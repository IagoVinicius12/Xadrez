import { Tabuleiro } from "../Pages/Home";

export function iniciando_tabuleiro(tabuleiro: Tabuleiro): Tabuleiro{
    tabuleiro[0][0]= { cor: 'black', peca: 'Torre' };
    tabuleiro[0][7] = { cor: 'black', peca: 'Torre' };
    tabuleiro[0][1]= { cor: 'black', peca: 'Cavalo' };
    tabuleiro[0][6]= { cor: 'black', peca: 'Cavalo' };
    tabuleiro[0][2]= { cor: 'black', peca: 'Bispo' };
    tabuleiro[0][5]= { cor: 'black', peca: 'Bispo' };
    tabuleiro[0][3]= { cor: 'black', peca: 'Rei' };
    tabuleiro[0][4]= { cor: 'black', peca: 'Rainha'};
    for(let i=0;i<8;i++){
        tabuleiro[1][i]={cor:'black',peca:'Peao'}
        tabuleiro[6][i]={cor:'white',peca:'Peao'}
    }
    tabuleiro[7][0]= { cor: 'white', peca: 'Torre' };
    tabuleiro[7][7] = { cor: 'white', peca: 'Torre' };
    tabuleiro[7][1]= { cor: 'white', peca: 'Cavalo' };
    tabuleiro[7][6]= { cor: 'white', peca: 'Cavalo' };
    tabuleiro[7][2]= { cor: 'white', peca: 'Bispo' };
    tabuleiro[7][5]= { cor: 'white', peca: 'Bispo' };
    tabuleiro[7][3]= { cor: 'white', peca: 'Rei' };
    tabuleiro[7][4]= { cor: 'white', peca: 'Rainha'};

    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(tabuleiro[i][j].cor!== ''){
                
            }
        }
    }
    return tabuleiro;
}