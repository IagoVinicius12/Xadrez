interface PecasProps{
    color:string;
}

export function Rei({ color }) {
  return <span style={{fontSize:'30px', color:"black"}}>{color === 'white' ? '♔' : '♚'}</span>;
}

export function Rainha({ color}) {
  return <span style={{fontSize:'30px', color:"black"}}>{color === 'white' ? '♕' : '♛'}</span>;
}

export function Torre({ color }) {
  return <span style={{fontSize:'30px', color:"black"}}>{color === 'white' ? '♖' : '♜'}</span>;
}

export function Bispo({ color }) {
  return <span style={{fontSize:'30px', color:"black"}}>{color === 'white' ? '♗' : '♝'}</span>;
}

export function Cavalo({ color }) {
  return <span style={{fontSize:'30px', color:"black"}}>{color === 'white' ? '♘' : '♞'}</span>;
}

export function Peao({ color }) {
  return <span style={{fontSize:'30px', color:"black"}}>{color === 'white' ? '♙' : '♟'}</span>;
}
