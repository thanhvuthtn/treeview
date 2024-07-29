import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { treeSelector } from '../../../../redux/treeslice'
//import { useNavigate } from 'react-router-dom'
import AddNode from './addnode/addnode'
const NodeAction = () => {
  //const navigate = useNavigate()
  const currentNode = useSelector(treeSelector)
  const [myState, setMyState] = useState(0)
  const [buttonEnable, setButtonEnable] = useState(true)
  const AddNodeHandle = () => {
    setMyState(1)
    setButtonEnable(false)
  }
  const UpdateNodeHandle = () => {
    setMyState(2)
  }
  const DeleteNodeHandle = () => {
    if (currentNode.children?.length === 0) {
      setMyState(3)
      //navigate('/giaovien')
    } else {
      alert('Bạn không thể xoá thư mục này vì nó không rổng!')
      setMyState(0)
    }
  }
  return (
    <>
      <ButtonGroup
        aria-label='Node Action'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Button
          variant='primary'
          onClick={AddNodeHandle}
          disabled={!buttonEnable}
        >
          Thêm
        </Button>
        <Button
          variant='primary'
          onClick={UpdateNodeHandle}
          disabled={!buttonEnable}
        >
          Sửa
        </Button>
        <Button
          variant='primary'
          onClick={DeleteNodeHandle}
          disabled={!buttonEnable}
        >
          Xóa
        </Button>
      </ButtonGroup>
      <hr />
      <div>
        <AddNode />
      </div>
    </>
  )
}

export default NodeAction
