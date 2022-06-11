import './Chart.scss'
import data from '../../data.json'
import Day from '../Day/Day'
import { useEffect, useState } from 'react'
import Divider from '../Divider/Divider'

const Chart = () => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalCalc = () => {
      let total = 0
      for (let day of data) {
        total += day.amount
      }
      return total
    }

    setTotal(() => totalCalc())
  }, [])

  return (
    <main className="chart">
      <h1>Spending - Last 7 days</h1>

      <div className="chart__graph">
        {data.map((day, index) => {
          return <Day key={index} day={day} total={total} index={index} />
        })}
      </div>
      <Divider />

      <div className="recap__container">
        <div>
          <h2 className="recap__text">Total this month</h2>
          <p className="recap__total recap__total--amount">$478.33</p>
        </div>
        <div className="recap__percentage">
          <p className=" recap__total recap__total--percent">+2.24% </p>
          <p className="recap__text">from last month</p>
        </div>
      </div>
    </main>
  )
}

export default Chart
