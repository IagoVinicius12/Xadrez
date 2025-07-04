import { Par, Tabuleiro } from "../Pages/Home";

export function verificar_movimento_cavalo(tab:Tabuleiro,par:Par):Par[]{
    let vetpar:Par[]=[]
    const movimentos: Par[] = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    for(const [dx,dy] of movimentos){
        let x=par[0]+dx
        let y=par[1]+dy
        if(x>=0 && x<=7 && y>=0 && y<=7){
            if(tab[par[0]][par[1]].cor != tab[x][y].cor){
                vetpar.push([x,y])
            }
        }
    }

    console.log(vetpar)
    return vetpar
}