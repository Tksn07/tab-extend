// MyComponent.js
import React from 'react';
import { useToast } from './toastContext';

const Toaster = () => {
  const showToast = useToast();

  return (
    <button onClick={() => showToast('登録されました')}>Register</button>
  );
};

export default Toaster;