import { Par, Tabuleiro } from "../Pages/Home";

export function verificar_movimento_peao(tab: Tabuleiro, par: Par): Par[] {
    let vetpar: Par[] = []
    if (tab[par[0]][par[1]].cor == 'white') {
        if (par[1] == 0 && par[0] > 0) {
            console.log('BBBBBB')
            let paraux_frente: Par = [par[0], par[1]]
            paraux_frente[0] = paraux_frente[0] - 1
            if (tab[paraux_frente[0]][paraux_frente[1]].peca == null) {
                vetpar.push([paraux_frente[0], paraux_frente[1]])
            }
            let paraux_diagonal: Par = [par[0], par[1]]
            paraux_diagonal[0] = paraux_diagonal[0] - 1
            paraux_diagonal[1] = paraux_diagonal[1] + 1
            if (tab[paraux_diagonal[0]][paraux_diagonal[1]].peca != null && tab[paraux_diagonal[0]][paraux_diagonal[1]].cor != 'white') {
                vetpar.push([paraux_diagonal[0], paraux_diagonal[1]])
            }
        }
        else if (par[1] == 7 && par[0] > 0) {
            console.log('CXCCC')
            let paraux_frente: Par = [par[0], par[1]]
            paraux_frente[0] = paraux_frente[0] - 1
            if (tab[paraux_frente[0]][paraux_frente[1]].peca == null) {
                vetpar.push([paraux_frente[0], paraux_frente[1]])
            }
            let paraux_diagonal: Par = [par[0], par[1]]
            paraux_diagonal[0] = paraux_diagonal[0] - 1
            paraux_diagonal[1] = paraux_diagonal[1] - 1
            if (tab[paraux_diagonal[0]][paraux_diagonal[1]].peca != null && tab[paraux_diagonal[0]][paraux_diagonal[1]].cor != 'white') {
                vetpar.push([paraux_diagonal[0], paraux_diagonal[1]])
            }
        }
        else {
            let paraux_frente: Par = [par[0], par[1]]
            paraux_frente[0] = paraux_frente[0] - 1
            if (tab[paraux_frente[0]][paraux_frente[1]].peca == null) {
                vetpar.push([paraux_frente[0], paraux_frente[1]])
            }
            let paraux_diagonalE: Par = [par[0], par[1]]
            paraux_diagonalE[0] = paraux_diagonalE[0] - 1
            paraux_diagonalE[1] = paraux_diagonalE[1] - 1
            if (tab[paraux_diagonalE[0]][paraux_diagonalE[1]].peca != null && tab[paraux_diagonalE[0]][paraux_diagonalE[1]].cor != 'white') {
                vetpar.push([paraux_diagonalE[0], paraux_diagonalE[1]])
            }
            let paraux_diagonalD: Par = [par[0], par[1]]
            paraux_diagonalD[0] = paraux_diagonalD[0] - 1
            paraux_diagonalD[1] = paraux_diagonalD[1] + 1
            if (tab[paraux_diagonalD[0]][paraux_diagonalD[1]].peca != null && tab[paraux_diagonalD[0]][paraux_diagonalD[1]].cor != 'white') {
                vetpar.push([paraux_diagonalD[0], paraux_diagonalD[1]])
            }
        }
    }
    else {
        console.log("AAA")
        if (par[1] == 0 && par[0] < 7) {
            let paraux_frente: Par = [par[0], par[1]]
            paraux_frente[0] = paraux_frente[0] + 1
            if (tab[paraux_frente[0]][paraux_frente[1]].peca == null) {
                vetpar.push([paraux_frente[0], paraux_frente[1]])
            }
            let paraux_diagonal: Par = [par[0], par[1]]
            paraux_diagonal[0] = paraux_diagonal[0] + 1
            paraux_diagonal[1] = paraux_diagonal[1] + 1
            if (tab[paraux_diagonal[0]][paraux_diagonal[1]].peca != null && tab[paraux_diagonal[0]][paraux_diagonal[1]].cor == 'white') {
                vetpar.push([paraux_diagonal[0], paraux_diagonal[1]])
            }
        }
        else if (par[1] == 7 && par[0] < 7) {
            let paraux_frente: Par = [par[0], par[1]]
            paraux_frente[0] = paraux_frente[0] + 1
            if (tab[paraux_frente[0]][paraux_frente[1]].peca == null) {
                vetpar.push([paraux_frente[0], paraux_frente[1]])
            }
            let paraux_diagonal: Par = [par[0], par[1]]
            paraux_diagonal[0] = paraux_diagonal[0] + 1
            paraux_diagonal[1] = paraux_diagonal[1] - 1
            if (tab[paraux_diagonal[0]][paraux_diagonal[1]].peca != null && tab[paraux_diagonal[0]][paraux_diagonal[1]].cor == 'white') {
                vetpar.push([paraux_diagonal[0], paraux_diagonal[1]])
            }
        }
        else {
            console.log('aa')
            let paraux_frente: Par = [par[0], par[1]]
            paraux_frente[0] = paraux_frente[0] + 1
            if (tab[paraux_frente[0]][paraux_frente[1]].peca == null) {
                vetpar.push([paraux_frente[0], paraux_frente[1]])
            }
            let paraux_diagonalE: Par = [par[0], par[1]]
            paraux_diagonalE[0] = paraux_diagonalE[0] + 1
            paraux_diagonalE[1] = paraux_diagonalE[1] - 1
            if (tab[paraux_diagonalE[0]][paraux_diagonalE[1]].peca != null && tab[paraux_diagonalE[0]][paraux_diagonalE[1]].cor == 'white') {
                vetpar.push([paraux_diagonalE[0], paraux_diagonalE[1]])
            }
            let paraux_diagonalD: Par = [par[0], par[1]]
            paraux_diagonalD[0] = paraux_diagonalD[0] + 1
            paraux_diagonalD[1] = paraux_diagonalD[1] + 1
            if (tab[paraux_diagonalD[0]][paraux_diagonalD[1]].peca != null && tab[paraux_diagonalD[0]][paraux_diagonalD[1]].cor == 'white') {
                vetpar.push([paraux_diagonalD[0], paraux_diagonalD[1]])
            }
        }
    }
    console.log(vetpar)
     return vetpar
}