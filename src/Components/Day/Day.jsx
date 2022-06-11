import './Day.scss'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'

const Day = ({ day, total, index }) => {
  const [percentage, setPercentage] = useState()
  const [height, setHeight] = useState(0)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const calcPercentage = () => {
      return Math.round((day.amount * 100) / total)
    }
    if (total) {
      setPercentage(() => calcPercentage())
    }
    if (percentage) {
      setHeight(() => percentage * 6.52)
    }
    setPercentage(() => calcPercentage())
  }, [total, day.amount, percentage])

  const Spends = () => {
    return <span className="day__spends">{`$${day.amount}`}</span>
  }

  if (height > 0 && height < 500)
    return (
      <>
        <div className="day">
          {hover && <Spends />}
          <div
            onMouseEnter={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{ height }}
            className={
              index === new Date().getUTCDay()
                ? 'day__bar day__bar--bigger'
                : 'day__bar'
            }
          ></div>
          <p className="day__string">{day.day}</p>
        </div>
      </>
    )
}

Day.propTypes = {
  day: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

export default Day
