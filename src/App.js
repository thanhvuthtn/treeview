import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/mynavbar/mynavbar'
import Admin from './components/admin/admin'
import Login from './components/Login/login'
import ToTruong from './components/totruong/totruong'
import Home from './components/home/home'
import GiaoVien from './components/giaovien/giaovien'
import Footer from './components/footer/footer'

function App () {
  return (
    <Container>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/totruong' element={<ToTruong />} />
          <Route path='/giaovien' element={<GiaoVien />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  )
}

export default App
