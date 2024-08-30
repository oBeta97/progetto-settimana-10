import { Col } from "react-bootstrap";
import { CloudFog2Fill } from "react-bootstrap-icons";

const MyNav = (props) => {

    return (
        <Col
            style={{
                maxWidth: "5em",
            }}
            className="p-3 dark-blue-trasparent"
        >
            <CloudFog2Fill
                size={35}
                color="#dedede"
                className="d-block m-auto"
            />
        </Col>
    );
}

export default MyNav;