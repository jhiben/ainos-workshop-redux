import React from 'react';

interface IButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick} style={{ width: 50, height: 50 }}>
    {text}
  </button>
);
export default Button;
