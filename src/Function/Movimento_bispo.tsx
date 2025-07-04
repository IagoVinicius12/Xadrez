import { useState } from "react";
import { Tabuleiro,Par } from "../Pages/Home";

export function verificar_movimento_bispo(tab:Tabuleiro, par:Par):Par[]{
    let die:boolean=false
    let did:boolean=false
    let dse:boolean=false
    let dsd:boolean=false
    // let paraux:Par=[par[0],par[1]]
    let vetpar:Par[]=[]
    while(true){
        if(par[0]!==7 && par[1]!==0){
            die=true
        }
        if(par[0]!==7 && par[1]!==7){
            did=true
        }
        if(par[0]!==0 && par[1]!==0){
            dse=true
        }
        if(par[0]!==0 && par[1]!==7){
            dsd=true
        }
        break;
    }
    while(true){
        if(die==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[0]<7 && paraux[1]>0){
                paraux[0]=paraux[0]+1
                paraux[1]=paraux[1]-1
                if(tab[paraux[0]][paraux[1]].peca===null){
                    vetpar.push([paraux[0],paraux[1]])
                }
                else{
                    break
                }
            }
        }
        if(did==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[0]<7 && paraux[1]<7){
                paraux[0]=paraux[0]+1
                paraux[1]=paraux[1]+1
                if(tab[paraux[0]][paraux[1]].peca===null){
                    vetpar.push([paraux[0],paraux[1]])
                }
                else{
                    break
                }
            }
        }
        if(dse==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[0]>0 && paraux[1]>0){
                paraux[0]=paraux[0]-1
                paraux[1]=paraux[1]-1
                if(tab[paraux[0]][paraux[1]].peca===null){
                    vetpar.push([paraux[0],paraux[1]])
                }
                else{
                    break
                }
            }
        }
        if(dsd==true){
            let paraux:Par=[par[0],par[1]]
            while(paraux[0]>0 && paraux[1]<7){
                paraux[0]=paraux[0]-1
                paraux[1]=paraux[1]+1
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
