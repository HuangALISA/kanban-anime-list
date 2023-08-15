export interface IRating {
  starCount: number
  wordMark: "Can't watch" | "Awful" | "Not bad" | "Good" | "Awesome"
  value: number
}

export interface IInformation {
  type: "TV series" | "Special" | "Movie" | "ONA"
  episodeAmount: number
  episodeDuration: number
  status: boolean
  year: number
  genre: string[]
}

export interface IAnimeInterface {
  name: string
  id: number
  link: string
  rating?: IRating
  information?: IInformation
  shortDescription: string
  longDescription: string
  author: string
  mainCharacters: string
  similarAnime: string[]
  studio: string
  country: string
}

export interface IHeaderInfo {
  siteName: string
  language: string
  buttonName: string
  darkMode: boolean
}
