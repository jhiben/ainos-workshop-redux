import React from 'react';

interface IButtonProps {
  text: string;
  onClick: () => void;
  width?: number;
}

const Button: React.FC<IButtonProps> = ({ text, onClick, width = 50 }) => (
  <button onClick={onClick} style={{ width, height: 50 }}>
    {text}
  </button>
);
export default Button;
