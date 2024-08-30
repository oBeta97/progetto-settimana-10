import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";


const CityRow = (props) => {

    const [cityWeather, setCityWeather] = useState(null)

    const getCurrentWeather = (city) => {

        fetch('https://api.openweathermap.org/data/2.5/weather?appid=7d92ebbfe5c767a95debf50a30df7c93&lang=it&units=metric&q=' + city)
            .then(response => {
                if (response.ok) {
                    // la chiamata ha tornato 200
                    return response.json()
                } else {
                    // la chiamata ha tornato 400, 401, 403, 404, 500
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then(searchObj => {
                setTimeout(() => {
                    setCityWeather(searchObj)
                }, 1000);
            })
            .catch(error => {
                console.error(error);
            })

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getCurrentWeather(props.city), [])

    return (
        <Row
            key={props.city}
            className="my-3"
            onClick={(e)=> props.onCityClick(props.city)}
        >

            {
                !cityWeather ? (
                    <Spinner variant="info" animation="grow" />
                ) : (
                    <>
                        <Col sm={2}>
                            <img
                                src={`http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`}
                                alt="weather icon"
                                className="img-fluid w-100"
                            />
                        </Col>
                        <Col>
                            {cityWeather.name}
                        </Col>
                        <Col>
                            {cityWeather.weather[0].main}
                        </Col>
                    </>
                )
            }
        </Row>
    );
}

export default CityRow;