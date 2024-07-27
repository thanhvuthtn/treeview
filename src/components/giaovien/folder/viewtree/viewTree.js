import { FaFolderOpen } from 'react-icons/fa6'
import { FaFolderClosed } from 'react-icons/fa6'
import { useState } from 'react'
import './viewTree.css'
//import { useDispatch } from 'react-redux'
//import { readTree } from '../redux/treeslice'

const ViewTree = props => {
  //Redux
  //const dispatch = useDispatch()

  //Data
  const { tree, level, isShow } = props
  const [show, setShow] = useState(isShow)

  //Style
  const showNodeStyle = {
    display: `${isShow ? 'block' : 'none'}`
  }

  const nodeStyle = {
    marginLeft: `${level * 20}px`
  }

  const iconStyle = {
    cursor: 'pointer',
    display: 'inline'
  }

  const textStyle = {
    display: 'inline-block',
    cursor: 'default'
  }

  //Handle
  const hideShowTongle = () => {
    setShow(!show)
  }
  const nodeSelectedHandle = () => {
    let currentNode = {
      id: tree.id,
      name: tree.name,
      isFolder: tree.isFolder,
      numberChildren: tree.children.length
    }
    //dispatch(readTree(currentNode))
  }
  return (
    <div style={showNodeStyle}>
      <div style={nodeStyle}>
        {tree.isFolder ? (
          <>
            <div style={iconStyle} onClick={hideShowTongle}>
              {show ? <FaFolderOpen /> : <FaFolderClosed />}
            </div>
            <div
              style={textStyle}
              className='textFolderStyle'
              id={tree.id}
              tabIndex='1'
              onClick={nodeSelectedHandle}
            >
              {tree.name}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <>
        {tree.isFolder ? (
          <>
            {tree.children.map(node => {
              return (
                <div key={node.id}>
                  <ViewTree tree={node} level={level + 1} isShow={show} />
                </div>
              )
            })}
          </>
        ) : (
          <></>
        )}
      </>
    </div>
  )
}

export default ViewTree
