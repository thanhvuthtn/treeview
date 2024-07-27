import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'
const MyNavbar = () => {
  return (
    <Row>
      <Col xs={8}>
        <Navbar bg='light' data-bs-theme='light'>
          <Container>
            <Navbar.Brand href='/home'>NHCH</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='/admin'>Admin</Nav.Link>
              <Nav.Link href='/totruong'>Tổ Truỏng</Nav.Link>
              <Nav.Link href='/giaovien'>Giáo viên</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Col>
      <Col xs={3}>
        <Row>
          <>Email: thanhvu@thtn.info</>
        </Row>
        <Row>
          <>Quyền: Tổ trưởng</>
        </Row>
      </Col>
      <Col>
        <Row>Logout</Row>
        <Row>Đổi mật khẩu</Row>
      </Col>
      <hr />
    </Row>
  )
}

export default MyNavbar
