import { useSelector } from 'react-redux'
import { treeSelector } from '../../../../redux/treeslice'
const NodeInfo = () => {
  const currentNode = useSelector(treeSelector)
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h5>Thư mục hiện hành</h5>
      </div>
      <div>Tên: {currentNode.name}</div>
      <div>Số con: {currentNode.children?.length}</div>
      <hr />
    </>
  )
}

export default NodeInfo
