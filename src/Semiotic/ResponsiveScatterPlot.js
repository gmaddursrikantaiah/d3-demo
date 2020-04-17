import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame"
import React from 'react';

const frameProps = {   points: [{ theaterCount: 4, rank: 18, grossWeekly: 327616, title: "TPS Report" },
{ day: 0, grossWeekly: 327616, winProbability: 0, theaterAvg: 81904, date: "2015-04-10", rank: 18 },
{ day: 1, grossWeekly: 327616, winProbability: 10, theaterAvg: 81904, date: "2015-04-10", rank: 18 },
{ day: 2, grossWeekly: 1150814, winProbability: 50, theaterAvg: 29508, date: "2015-04-17", rank: 15 },
{ day: 3, grossWeekly: 7156570, winProbability: 30, theaterAvg: 5702, date: "2015-04-24", rank: 6 },
{ day: 4, grossWeekly: 3615000, winProbability: 40, theaterAvg: 2826, date: "2015-05-01", rank: 6 },
{ day: 5, grossWeekly: 5212462, winProbability: 80, theaterAvg: 2601, date: "2015-05-08", rank: 6 },
{ day: 6, grossWeekly: 3108609, winProbability: 60, theaterAvg: 1809, date: "2015-05-15", rank: 9 },
{ day: 7, grossWeekly: 2248258, winProbability: 70, theaterAvg: 2509, date: "2015-05-22", rank: 12 },
{ day: 8, grossWeekly: 1122034, winProbability: 80, theaterAvg: 2217, date: "2015-05-29", rank: 13 },
{ day: 9, grossWeekly: 551552, winProbability: 20, theaterAvg: 1826, date: "2015-06-05", rank: 19 },
{ day: 10, grossWeekly: 316877, winProbability: 100, theaterAvg: 1633, date: "2015-06-12", rank: 20 },
{ day: 11, grossWeekly: 201345, winProbability: 50, theaterAvg: 1624, date: "2015-06-19", rank: 29 },
{ day: 12, grossWeekly: 153162, winProbability: 40, theaterAvg: 1891, date: "2015-06-26", rank: 34 },
{ day: 13, grossWeekly: 102114, winProbability: 30, theaterAvg: 1674, date: "2015-07-03", rank: 36 },
{ day: 14, grossWeekly: 64350, winProbability: 20, theaterAvg: 1650, date: "2015-07-10", rank: 42 }],
  size: [700,400],
  margin: { left: 60, bottom: 90, right: 10, top: 40 },
  responsiveWidth: true,
  xAccessor: "day",
  yAccessor: "winProbability",
  yExtent: [0],
  xExtent: [0],
  pointStyle: d => {
    return {
      r: 5,
      fill: '#E0488B'
    }
  },
  title: (
    <text textAnchor="middle">
      <tspan fill={"#ac58e5"} font-weight={900}>TPS Report</tspan> 
    </text>
  ),
  axes: [{ orient: "left", label: "Rank" },
    { orient: "bottom", label: { name: "Theaters", locationDistance: 55 } }],
  hoverAnnotation: true
}

export default () => {
  return <ResponsiveXYFrame {...frameProps} />
}