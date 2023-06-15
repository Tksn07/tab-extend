/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineSetting } from "react-icons/ai"
import { ItemType } from "./type";


type Props = {
  tabItemValue: ItemType,
  onClick: (event: any)  => void
}

const Header = ({
  tabItemValue,
  onClick,
}: Props) => {

  return (
    <header>
      <nav>
        <ul css={Navigation}>
          <li css={[Tab, TabFirst]}>
            <input type="radio" name="tabItem" value="first" id="first" css={inputWrapper} checked={tabItemValue === "first"} onChange={onClick}/>
            <label htmlFor="first" css={itemLabel}>コンテンツ1</label>
          </li>
          <li css={[Tab, TabSecond]}>
            <input type="radio" name="tabItem" value="second" id="second" css={inputWrapper} checked={tabItemValue === "second"} onChange={onClick}/>
            <label htmlFor="second" css={itemLabel}>コンテンツ2</label>
          </li>
          <li css={[Tab, TabThird]}>
            <input type="radio" name="tabItem" value="third" id="third" css={inputWrapper} checked={tabItemValue === "third"} onChange={onClick}/>
            <label htmlFor="third" css={itemLabel}>コンテンツ3</label>
          </li>
          <li css={[Tab, TabFourth]}>
            <input type="radio" name="tabItem" value="fourth" id="fourth" css={inputWrapper} checked={tabItemValue === "fourth"} onChange={onClick}/>
            <label htmlFor="fourth" css={itemLabel}>コンテンツ4</label>
          </li>
          <li css={[Tab, TabFifth]}>
            <input type="radio" name="tabItem" value="fifth" id="fifth" css={inputWrapper} checked={tabItemValue === "fifth"} onChange={onClick}/>
            <label htmlFor="fifth" css={itemLabel}>コンテンツ5</label>
          </li>
          <li css={[Tab, TabSixth]}>
            <input type="radio" name="tabItem" value="sixth" id="sixth" css={inputWrapper} checked={tabItemValue === "sixth"} onChange={onClick}/>
            <label htmlFor="sixth" css={itemLabel}>コンテンツ6</label>
          </li>
          <li css={[Tab, SettingTab]}>
            <input type="radio" name="setting" value="setting" id="setting" css={inputWrapper} checked={tabItemValue === "setting"} onChange={onClick}/>
            <label htmlFor="setting" css={itemLabel}><AiOutlineSetting /></label>
          </li>
        </ul>
        <div css="navigationBar"></div>
      </nav>
    </header>
  )
}

export default Header

const Navigation = css`
  list-style:none;
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  padding: 0px;
`

const inputWrapper = css`
  opacity: 0;
  position: absolute;
`

const Tab = css`
  display: grid;
  place-items: center;
  color: #FFFFFF;
  border-radius: 8px 8px 0 0;
  margin-top: 8px;
  :has(input:checked) {
    height: 56px;
    margin-top: 0px
  }
`

const itemLabel = css`
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  place-items: center;
`

const TabFirst = css`
  background-color: #039BE5;
`

const TabSecond = css`
  background-color: #33B679;
`

const TabThird = css`
  background-color: #E4C441;
`

const TabFourth = css`
  background-color: #EF6C00;
`

const TabFifth = css`
  background-color: #9E69AF;
`

const TabSixth = css`
  background-color: #D81B60;
`

const SettingTab = css`
  background-color: #A79B8E;
`