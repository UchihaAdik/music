import { Routes ,Route} from 'react-router-dom'


import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Search from './pages/Search'
import Playlists from './pages/Playlists'
import Notifications from './pages/Notifications'
import PremiumContent from './pages/PremiumContent'


import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='Search' element={<Search/>}/>
            <Route path='Playlists' element={<Playlists/>}/>
            <Route path='Notifications' element={<Notifications/>}/>
            <Route path='PremiumContent' element={<PremiumContent/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
