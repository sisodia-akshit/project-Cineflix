import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './screens/Register/SignUp/SignUp'
import Movies from './screens/Movies/Movies'
import SignIn from './screens/Register/SignIn/SignIn'
import SingleMovie from './screens/SingleMovie/SingleMovie'
import SearchedMovie from './screens/SearchedMovie/SearchedMovie'
import CreateMovie from './screens/CreateMovie/CreateMovie'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cineflix" element={<Movies />} />
      <Route path="/cineflix/:id" element={<SingleMovie />} />
      <Route path="/search/:searched" element={<SearchedMovie />} />
      <Route path="/createmovie" element={<CreateMovie />} />
      <Route path="*" element={<Movies />} />
    </Routes>
    </>
  )
}

export default App
