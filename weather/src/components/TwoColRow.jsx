import { Col, Row } from "react-bootstrap";

const TwoColRow = (props) => {
    return (
        <Row className="gap-3 mb-3">
            <Col sm={12} md={6} lg={3} className={`d-flex align-items-center ${props.leftVisibility}`}>
                {props.left}
            </Col>
            
            <Col sm={12} md={6} lg={8} className={`${props.rightVisibility}`}>
                {props.right}
            </Col>
        </Row>
    );
}

export default TwoColRow;