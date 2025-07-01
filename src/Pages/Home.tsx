import { useState } from "react";
import './home.css'

function Home(){
    const celula: string[]=['A','B','C','D','E','F','G','H']
    const linha:string[]=['1','2','3','4','5','6','7','8']
    const whitecells:string[]=[]
    const handleIndex_cell=(str:string)=>{
        celula.indexOf(str)
    }
    const handleIndex_line=(str:string)=>{
        linha.indexOf(str)
    }
    return(
        <div className="tela">
            <div className="tabuleiro">
                {linha.map((_,i)=>(
                    <div className="linha" key={i}>
                        {celula.map((_,j)=>(
                            <div className="celula" key={`${i}-${j}`} style={{backgroundColor: (j+i)%2==0? 'white':'black' }}>
                                <p style={{color:"blue"}}>{i}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home