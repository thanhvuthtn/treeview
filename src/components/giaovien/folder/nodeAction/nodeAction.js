import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const NodeAction = () => {
    //style
    
    return (
        <>
            <ButtonGroup aria-label="Node Action" style={{display:'flex', alignItems:'center'}}>
                <Button variant="primary">Thêm</Button>
                <Button variant="primary">Sửa</Button>
                <Button variant="primary">Xóa</Button>
            </ButtonGroup>
            <hr/>
        </>
    );
}

export default NodeAction;