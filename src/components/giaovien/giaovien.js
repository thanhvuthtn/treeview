import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './giaovien.css'

const GiaoVien = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to='/giaovien/folder'>Thư mục</Link>
        </li>
        <li>
          <Link to='/giaovien/dacta'>Đặc tả</Link>
        </li>
        <li>
          <Link to='/giaovien/cauhoi'>Câu hỏi</Link>
        </li>
      </ul>
    </Container>
  )
}

export default GiaoVien
