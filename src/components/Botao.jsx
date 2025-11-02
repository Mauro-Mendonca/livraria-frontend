import React from 'react';
import '../styles/botao.css';

export default function Botao({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  ...props
}) {
  return (
    <button
      className={`botao ${variant}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}