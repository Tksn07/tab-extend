import { useState } from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { ItemType } from './type';


function App() {
  const [tabItemValue, setTabItemValue] = useState<ItemType>("first")

  const handleTabItemValueChange = (event: any) => {
    setTabItemValue(event.target.value);
  };

  return (
    <>
      <Global styles={globalCss} />
      <Header tabItemValue={tabItemValue} onClick={(event: any) => handleTabItemValueChange(event)}/>
      <Body selectItem={tabItemValue} />
    </>
  );
}

export default App;

const globalCss = css`
  body {
    width: 780px;
    height: 500px;
    font-family: 'Noto Sans JP', sans-serif;
    overflow: hidden;
    background-color: #F0F2F5;
  }
`