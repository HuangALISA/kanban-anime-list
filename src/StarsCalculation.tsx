import React from "react"
import { ReactComponent as Star } from "./star.svg"
import { ReactComponent as HalfStar } from "./half_star.svg"
import { ReactComponent as FullStar } from "./full_star.svg"
import "./App.css"

const highestRanking = () => (
  <span className="highestRanking">
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
  </span>
)

const nineTen = () => (
  <span className="nineTen">
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <HalfStar width="10px" height="10px" />
  </span>
)

const eightNine = () => (
  <span className="eightNine">
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const sevenEight = () => (
  <span className="sevenEight">
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <HalfStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const sixSeven = () => (
  <span className="sixSeven">
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const fiveSix = () => (
  <span className="fiveSix">
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <HalfStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const fourFive = () => (
  <span className="fourFive">
    <FullStar width="10px" height="10px" />
    <FullStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const threeFour = () => (
  <span className="threeFour">
    <FullStar width="10px" height="10px" />
    <HalfStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const twoThree = () => (
  <span className="twoThree">
    <FullStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const oneTwo = () => (
  <span className="oneTwo">
    <HalfStar width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)

const zeroRanking = () => (
  <span className="zeroRanking">
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
    <Star width="10px" height="10px" />
  </span>
)
interface StarsCalculationProps {
  pageRating: number
}
export const StarsCalculation: React.FC<StarsCalculationProps> = ({
  pageRating,
}) => {
  const getStars = () => {
    if (pageRating === 10) {
      return highestRanking()
    } else if (pageRating < 10 && pageRating >= 9) {
      return nineTen()
    } else if (pageRating < 9 && pageRating >= 8) {
      return eightNine()
    } else if (pageRating < 8 && pageRating >= 7) {
      return sevenEight()
    } else if (pageRating < 7 && pageRating >= 6) {
      return sixSeven()
    } else if (pageRating < 6 && pageRating >= 5) {
      return fiveSix()
    } else if (pageRating < 5 && pageRating >= 4) {
      return fourFive()
    } else if (pageRating < 4 && pageRating >= 10) {
      return threeFour()
    } else if (pageRating < 10 && pageRating >= 2) {
      return twoThree()
    } else if (pageRating < 2 && pageRating >= 1) {
      return oneTwo()
    } else if (pageRating < 1 && pageRating >= 0) {
      return zeroRanking()
    }
    return null
  }

  return <span className="starsCalculation">{getStars()}</span>
}
