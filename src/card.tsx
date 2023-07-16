/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { setLocalStrageUrl } from "./localStrage";
import { ContentType } from "./type";
import { useToast } from './components/toaster/toastContext';

type props = {
  id: ContentType,
  imageColor: string,
  textLabel: string,
  initialInputValue: string
}

const Card = ({ id, imageColor, textLabel, initialInputValue }: props) => {
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const showToast = useToast();

  const autoSave = (inputValue: string) => {
    setLocalStrageUrl(id, inputValue)
    showToast('登録されました')
  };

  const handleOnChange = (inputValue: string) => {
    if (timer !== null) {
      clearTimeout(timer); // 以前のタイマーがあればクリア
    }
    setInputValue(inputValue)

    // 0.5秒後に自動保存
    setTimer(setTimeout(() => {
      autoSave(inputValue);
    }, 500));
  }

  return (
    <div css={card}>
      <div css={colorImage(imageColor)}>
      </div>
      <div css={form}>
        <label htmlFor="content1" css={labelWrapper}>{textLabel}</label>
        <input
          id="content1"
          type="text"
          value={inputValue}
          placeholder='https://~'
          css={inputWrapper}
          onChange={(event) => handleOnChange(event.target.value)} />
      </div>
    </div>
  )
}

export default Card

const card = css`
  display: flex;
  background-color: white;
  padding: 16px;
`

const colorImage = (imageColor: string) => (
  css`
    width: 36px;
    height: 36px;
    background-color: ${imageColor};
    margin-right: 16px;
    border-radius: 8px;
  `
)

const form = css`
  width: 80%;
`

const labelWrapper = css`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
`

const inputWrapper = css`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 2px solid #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`