import React from 'react'

import './hallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
    {
      entries.map(({ date, guesses, id, player }) => (
        <tr key={id}>
          <td className="date"> {date} </td>
          <td className="guesses">{guesses}</td>
          <td className="player">{player}</td>
        </tr>
      ))
    }
    </tbody>
  </table>
)

export default HallOfFame

// ===========>
export const FAKE_HOF = [
    { id: 3, guesses: 18, date: '10/10/2018', player: 'peterson' },
    { id: 2, guesses: 23, date: '11/10/2018', player: 'didy' },
    { id: 1, guesses: 31, date: '06/10/2018', player: 'wislin' },
    { id: 0, guesses: 48, date: '14/10/2018', player: 'black' },
  ]