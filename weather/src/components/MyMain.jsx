import { Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import ThreeColRow from "./ThreeColRow";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import PopularCities from "./PopularCities";
import TwoColRow from "./TwoColRow";
import ForecastWeather from "./ForecastWeather";

const MyMain = (props) => {

    const [searchedCity, setSearchedCity] = useState('Vicenza')

    return (
        <Col
            className="flex-grow-1 m-0 p-4 py-3"
        >
            <Container fluid className="m-0 p-0">
                <ThreeColRow
                    left={<SearchBar onSubmit={(searchVal) => setSearchedCity(searchVal)} />}
                    leftVisibility=""
                    center=""
                    right="ciao"
                    />
                <ThreeColRow
                    left={<CurrentWeather city={searchedCity}/>}
                    center={"mappa"}
                    centerVisibility="d-none d-lg-block"
                    right={<PopularCities onCityClick={(city) => setSearchedCity(city) } />}
                    rightVisibility="d-none d-lg-block"
                />
                <TwoColRow 
                    left={<ForecastWeather city={searchedCity} />}
                    right
                />
            </Container>

        </Col>
    );
}

export default MyMain;