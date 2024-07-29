import { Col, Container, Row } from 'react-bootstrap'
import { myNode } from '../../../database/myNode'
import ViewTree from './viewtree/viewTree'
import NodeInfo from './nodeinfo/NodeInfo'
import NodeAction from './nodeAction/nodeAction'

const Folder = () => {
  let myTree = myNode
  return (
    <Container>
      <Row>
        <Col className={'folderColumnStyle'}>
          <h5>Cây thư mục</h5>
          <ViewTree tree={myTree} level={0} isShow={true} />
        </Col>
        <Col className={'folderColumnStyle'}>
          <NodeInfo />
          <NodeAction />
        </Col>
      </Row>
    </Container>
  )
}

export default Folder
