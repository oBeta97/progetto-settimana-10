import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { showCurrentTime } from "../modules/DateTime";
import { useEffect, useState } from "react";
import { ArrowUp, Droplet, Water, Wind } from "react-bootstrap-icons";

const CurrentWeather = (props) => {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetchError, setIsFetchError] = useState(false);

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
                    setCurrentWeather(searchObj);
                    setIsLoading(false);

                    props.onFetchEnd({
                        lat: searchObj.coord.lat,
                        lng: searchObj.coord.lng,
                    });
                }, 1000);
            })
            .catch(error => {
                console.error(error);
                setIsFetchError(true);
            })

    }

    useEffect(() => {
        setIsLoading(true);
        getCurrentWeather(props.city);
    }, [props.city])

    return (
        <>

            <div className="dark-blue-trasparent w-100 p-3 rounded-4">
                <h6 className="fw-bold p-0 m-0">
                    Current Weather in: {props.city}
                </h6>
                <small>{showCurrentTime()}</small>
                {
                    isFetchError ? (
                        <Alert variant="warning">
                            Something went wrong! :(
                        </Alert>

                    ) :
                        isLoading ? (
                            <div>
                                <Spinner variant="info" animation="grow" />
                            </div>
                        ) : (
                            <>
                                <Row className="my-3 text-center align-items-center">
                                    <Col sm={6}>
                                        <img
                                            src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
                                            alt="weather icon"
                                            className="img-fluid w-100"
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <h3 className="m-0">
                                            {currentWeather.main.temp.toString().slice(0, 2)}<sup style={{ fontSize: "0.6em" }}>°C</sup>
                                        </h3>
                                        <small>
                                            {currentWeather.weather[0].main}
                                        </small>
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col sm={3} className="d-flex flex-column gap-1">
                                        <Water className="d-block m-auto" />
                                        <small>
                                            {currentWeather.main.grnd_level}
                                        </small>
                                    </Col>
                                    <Col sm={3} className="d-flex flex-column gap-1">
                                        <Droplet className="d-block m-auto" />
                                        <small>
                                            {currentWeather.main.humidity}%
                                        </small>
                                    </Col>
                                    <Col sm={3} className="d-flex flex-column gap-1">
                                        <Wind className="d-block m-auto" />
                                        <small>
                                            {currentWeather.wind.speed}
                                        </small>
                                    </Col>
                                    <Col sm={3} className="d-flex flex-column gap-1">
                                        <ArrowUp
                                            className="d-block m-auto"
                                            style={{ transform: `rotate(${currentWeather.wind.deg}deg)` }}
                                        />
                                        <small>
                                            {currentWeather.wind.deg}°
                                        </small>
                                    </Col>
                                </Row>
                            </>

                        )
                }
            </div >
        </>
    );
};


export default CurrentWeather;