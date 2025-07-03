import { useState } from "react";
import { Tabuleiro,Par } from "../Pages/Home";

export function verificar_movimento_torre(tab:Tabuleiro, par:Par):Par[]{
    let esquerda:boolean=false
    let direita:boolean=false
    let baixo:boolean=false
    let cima:boolean=false
    // let paraux:Par=[par[0],par[1]]
    let vetpar:Par[]=[]
    while(true){
        if(par[1]!==0){
            esquerda=true
        }
        if(par[1]!==7){
            direita=true
        }
        if(par[0]!==7){
            baixo=true
        }
        if(par[0]!==0){
            cima=true
        }
        break;
    }
    while(true){
        if(esquerda==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[1]>0){
                paraux[1]=paraux[1]-1
                if(tab[paraux[0]][paraux[1]].peca===null){
                    vetpar.push([paraux[0],paraux[1]])
                }
                else{
                    break
                }
            }
        }
        if(direita==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[1]<7){
                paraux[1]=paraux[1]+1
                if(tab[paraux[0]][paraux[1]].peca===null){
                    vetpar.push([paraux[0],paraux[1]])
                }
                else{
                    break
                }
            }
        }
        if(baixo==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[0]<7){
                paraux[0]=paraux[0]+1
                if(tab[paraux[0]][paraux[1]].peca===null){
                    vetpar.push([paraux[0],paraux[1]])
                }
                else{
                    break
                }
            }
        }
        if(cima==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[0]>0){
                paraux[0]=paraux[0]-1
                if(tab[paraux[0]][paraux[1]].peca===null){
                    vetpar.push([paraux[0],paraux[1]])
                }
                else{
                    break
                }
            }
        }
        break
    }
    return vetpar
}   
