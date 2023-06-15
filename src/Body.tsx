/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Bars } from 'react-loader-spinner'
import { ItemType } from "./type";

type Props = {
  selectItem: ItemType
}

const Body = ({selectItem}: Props) => {
  const [isCompletedLoad, setIsCompletedLoad] = useState(true)
  const handleOnload = () => {
    setIsCompletedLoad(false)
  }

  const setIframeUrl = (selectItem: ItemType) => {
    switch(selectItem) {
      case "first":
        return "https://caniuse.com/"
      case "second":
        return "https://caninclude.glitch.me/"
      case "third":
        return "https://bundlephobia.com/"
      case "fourth":
        return "https://caniuse.com/"
      case "fifth":
        return "https://caniuse.com/"
      case "sixth":
        return "https://www.youtube.com/"
    }
  }

  return (
    <body>
      <div css={content(isCompletedLoad)}>
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      <iframe css={[myIframe, hiddenIframe]} id="my-iframe" title="can i use" loading="lazy" width="780" height="500" src={setIframeUrl(selectItem)} onLoad={handleOnload}></iframe>
    </body>
  )
}

export default Body

const content = (isVisible: boolean) => (
  css`
    display: ${isVisible ? "grid" : "none"};
    place-items: center;
    width: 100%;
  `
);

const myIframe = css`
  border: none; 
`

const hiddenIframe = css`
  // visibility: hidden;
`