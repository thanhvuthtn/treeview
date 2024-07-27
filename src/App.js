import './App.css'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/mynavbar/mynavbar'
import Admin from './components/admin/admin'
import Login from './components/Login/login'
import ToTruong from './components/totruong/totruong'
import Home from './components/home/home'
import GiaoVien from './components/giaovien/giaovien'
import Footer from './components/footer/footer'
import DeThi from './components/dethi/dethi'
import Folder from './components/giaovien/folder/Folder'
import DacTa from './components/giaovien/dacta/dacta'
import CauHoi from './components/giaovien/cauhoi/cauhoi'

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
          <Route path='/dethi' element={<DeThi />} />
          <Route path='/giaovien/folder' element={<Folder />} />
          <Route path='/giaovien/dacta' element={<DacTa />} />
          <Route path='/giaovien/cauhoi' element={<CauHoi />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  )
}

export default App
