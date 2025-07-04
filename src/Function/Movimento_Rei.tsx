import { Par, Tabuleiro } from "../Pages/Home";

export function verificar_movimento_rei(tab:Tabuleiro,par:Par):Par[]{
    let vetpar:Par[]=[]

    const movimentos=[[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]]

    for(const [dx,dy] of movimentos){
        let x=par[0]+dx
        let y=par[1]+dy
        while(x>=0 && x<=7 && y>=0 && y<=7){
            if(tab[par[0]][par[1]].cor!= tab[x][y].cor && tab[x][y].peca!=null){
                vetpar.push([x,y])
                break
            }
            else if(tab[par[0]][par[1]].cor==tab[x][y].cor){
                break
            }
            vetpar.push([x,y])
            break
            
        }
    }

    return vetpar
}