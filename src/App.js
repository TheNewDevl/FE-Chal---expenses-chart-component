import './styles/App.scss'
import Header from './Components/Header/Header'
import CompContainer from './Components/CompContainer/CompContainer'
import Chart from './Components/Chart/Chart'

function App() {
  return (
    <CompContainer>
      <Header />
      <Chart />
    </CompContainer>
  )
}

export default App
