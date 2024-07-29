import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const AddNode = () => {
  return (
    <>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon3'>Tên thư mục</InputGroup.Text>
        <Form.Control id='basic-url' aria-describedby='basic-addon3' />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Đặc tả</InputGroup.Text>
        <Form.Control as='textarea' aria-label='With textarea' />
      </InputGroup>
      <div style={{ marginTop: '10px' }}>
        <Button variant='primary'>Thêm thư mục</Button>{' '}
        <Button variant='secondary'>Bỏ qua</Button>{' '}
      </div>
    </>
  )
}

export default AddNode
