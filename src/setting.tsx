/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./card";
import { ContentType } from "./type";
import { getLocalStrageUrl } from "./localStrage";
import { ToastProvider } from "./components/toaster/toastContext";

const Setting = () => {
  const backgroundColor = (contentTab: ContentType) => {
    switch(contentTab) {
      case "first":
        return "#039BE5"
      case "second":
        return "#33B679"
      case "third":
        return "#E4C441"
      case "fourth":
        return "#EF6C00"
      case "fifth":
        return "#9E69AF"
      case "sixth":
        return "#D81B60"
      default:
        return "#A79B8E"
    }
  }

  const tabContentText = (contentTab: ContentType) => {
    switch(contentTab) {
      case "first":
        return "コンテンツ1"
      case "second":
        return "コンテンツ2"
      case "third":
        return "コンテンツ3"
      case "fourth":
        return "コンテンツ4"
      case "fifth":
        return "コンテンツ5"
      case "sixth":
        return "コンテンツ6"
      default:
        return "所属不明"
    }
  }

  const items: ContentType[] = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']

  return (
    <div css={settingBody}>
      <ol css={olWrapper}>
        { items.map((item) => {
          const color = backgroundColor(item)
          const text = tabContentText(item)
          const inputValue = getLocalStrageUrl(item)
          return (
            <li key={item}>
              <ToastProvider>
                <Card id={item} imageColor={color} textLabel={text} initialInputValue={inputValue} />
              </ToastProvider>
            </li>
          )
        }) }
      </ol>
    </div>
  )
}

export default Setting;

const olWrapper = css`
  margin: 0;
  list-style-type: none;
  padding: 0 32px;

  li {
    border-bottom: solid 1px #cdcdcd;

    &:last-child {
      border-bottom: none;
    }
  }
`

const settingBody = css`
  overflow-y: scroll;
  height: 500px;
`
