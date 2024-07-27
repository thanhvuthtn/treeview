import { Col, Container, Row } from 'react-bootstrap'
import { myNode } from '../../../database/myNode'
import ViewTree from './viewtree/viewTree'
const Folder = () => {
  return (
    <Container>
      <Row>
        <h4>Cây thư mục</h4>
      </Row>
      <Row>
        <Col className={'folderColumnStyle'}>
          <ViewTree tree={myNode} level={0} isShow={true} />
        </Col>
        <Col className={'folderColumnStyle'}>abc</Col>
      </Row>
    </Container>
  )
}

export default Folder
