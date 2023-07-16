/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import pageNotFound from '../../assets/pageNotFound.png'

const ErrorNotSrc = () => {
  return (
    <div css={center}>
      <div>
        <img css={center} src={pageNotFound} alt='リンクが登録されてませんでした。' />
        <p css={errorMessage}>上の設定タブからページのリンクを登録してください。</p>
      </div>
    </div>
  )
}

export default ErrorNotSrc

const center = css`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`

const errorMessage = css`
  text-align: center;
  font-size: 17px;
`