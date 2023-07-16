/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { createContext, useState, useContext } from 'react';

const ToastContext = createContext<(message: string) => void>(() => {});

type Props = {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState({ isShowing: false, message: '' });

  const showToast = (message: string) => {
    setToast({ isShowing: true, message });
    setTimeout(() => setToast({ isShowing: false, message: '' }), 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast.isShowing && 
        <div css={toasterWrapper}>
          {toast.message}
        </div>
      }
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};

const toasterWrapper = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: limegreen;
  color: white;
  border-radius: 5px;
  z-index: 1000;
  transition: opacity 0.5s, transform 0.5s;
`