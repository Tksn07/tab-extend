/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Bars } from 'react-loader-spinner'
import { ItemType } from "./type";
import Setting from "./setting";
import ErrorNotSrc from "./components/404";
import Loading from "./components/loading";

type Props = {
  selectItem: ItemType
}

const Body = ({selectItem}: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleOnload = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
  }, [selectItem])

  const getIframeUrl = (selectItem: ItemType) => {
    return localStorage.getItem(selectItem)
  }
  const url = getIframeUrl(selectItem)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <body css={bodyWrapper}>
      { selectItem == 'setting' && <Setting /> }
      { url === null || url === '' ? <ErrorNotSrc /> :
        <>
          {isLoading && <Loading />}
          <iframe css={[myIframe, hiddenIframe(isLoading)]} id="my-iframe" title="can i use" loading="lazy" width="780" height="500" src={url} onLoad={handleOnload}></iframe>
        </>
      }
    </body>
  )
}

export default Body

const myIframe = css`
  border: none; 
`

const hiddenIframe = (isVisible: boolean) => (css`
  position: ${isVisible ? 'fixed' : 'static'};
  opacity: ${isVisible ? 0 : 1};
`)

const bodyWrapper = css`
  background-color: white;
`