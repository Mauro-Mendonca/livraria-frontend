import React from 'react';

export default function Alert({message, type}) {
  if (!message) return null;
  return <div className={`alert ${type}`}>{message}</div>;
}