import { Col, Row, Spinner } from "react-bootstrap";

const ForecastWeatherRow = (props) => {

    const showDate = (ms) => {
        const date = new Date(ms);

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const dayOfWeek = days[date.getDay()];

        const formattedDate = `${day} ${month}, ${dayOfWeek}`;

        return formattedDate;
    }

    return (
        <Row
            key={props.weather.dt}
            className="my-3"
        >
            <Col sm={2}>
                <img
                    src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}
                    alt="weather icon"
                    className="img-fluid w-100"
                />
            </Col>
            <Col className="small" sm={4} >
                {
                    `${props.weather.main.temp_max.toString().slice(0,2)}°/${props.weather.main.temp_min.toString().slice(0,2)}°`
                }
            </Col>
            <Col className="small">
                {
                    showDate(props.weather.dt)
                }
            </Col>

        </Row>
    );
};

export default ForecastWeatherRow;