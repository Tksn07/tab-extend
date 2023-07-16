import { ContentType } from "./type"

export const setLocalStrageUrl = (contentTab: ContentType, url: string) => {
  localStorage.setItem(contentTab, url)
}

export const getLocalStrageUrl = (contentTab: ContentType) => {
  const localStrageUrl = localStorage.getItem(contentTab) || ''
  return localStrageUrl
}