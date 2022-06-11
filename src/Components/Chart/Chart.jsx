import './Chart.scss'
import data from '../../data.json'
import Day from '../Day/Day'
import { useEffect, useState } from 'react'

const Chart = () => {
  const [total, setTotal] = useState(0)
  const [bigger, setBigger] = useState()

  useEffect(() => {
    const totalCalc = () => {
      let total = 0
      for (let day of data) {
        total += day.amount
      }
      return total
    }

    setTotal(() => totalCalc())

    setBigger(() => {
      let bigSpend = 0
      let index = 0
      for (let i = 0; i < data.length; i++) {
        if (data[i].amount > bigSpend) {
          console.log(data[i].amount)
          bigSpend = data[i].amount
          index = i
        }
      }
      return index
    })
  }, [])

  return (
    <main className="chart">
      <h1>Spending - Last 7 days</h1>

      <section className="chart__graph">
        {data.map((day, index) => {
          return (
            <Day
              key={index}
              day={day}
              total={total}
              bigger={index === bigger && true}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Chart
