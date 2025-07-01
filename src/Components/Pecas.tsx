interface PecasProps{
    color:string;
}

export function Rei({ color }) {
  return <span>{color === 'white' ? '♔' : '♚'}</span>;
}

export function Rainha({ color}) {
  return <span>{color === 'white' ? '♕' : '♛'}</span>;
}

export function Torre({ color }) {
  return <span>{color === 'white' ? '♖' : '♜'}</span>;
}

export function Bispo({ color }) {
  return <span>{color === 'white' ? '♗' : '♝'}</span>;
}

export function Cavalo({ color }) {
  return <span>{color === 'white' ? '♘' : '♞'}</span>;
}

export function Peao({ color }) {
  return <span>{color === 'white' ? '♙' : '♟'}</span>;
}
