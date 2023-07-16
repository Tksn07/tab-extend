/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div css={center}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
  </div>
  )
}

export default Loading;

const center = css`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`
