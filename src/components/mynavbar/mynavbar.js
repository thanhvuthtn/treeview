import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'
const MyNavbar = () => {
  return (
    <Row>
      <Col>
        <Navbar bg='light' data-bs-theme='light'>
          <Container>
            <Navbar.Brand href='/home'>NHCH</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='/admin'>Admin</Nav.Link>
              <Nav.Link href='/totruong'>Tổ Truỏng</Nav.Link>
              <Nav.Link href='/giaovien'>Giáo viên</Nav.Link>
              <Nav.Link href='/dethi'>Đề thi</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Col>
      <Col>
        <Row>
          <div style={{ textAlign: 'end', fontSize: '75%', color: '#752e01' }}>
            Email: thanhvu@thtn.info - Quyền: Tổ trưởng - Logout - Đổi mật khẩu
          </div>
        </Row>
      </Col>
      <hr />
    </Row>
  )
}

export default MyNavbar
