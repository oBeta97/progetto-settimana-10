import { Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import ThreeColRow from "./ThreeColRow";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import PopularCities from "./PopularCities";

const MyMain = (props) => {

    const [searchedCity, setSearchedCity] = useState('Vicenza')

    return (
        <Col
            className="flex-grow-1 m-0 p-5"
        >
            <Container fluid className="m-0 p-0">
                <ThreeColRow
                    left={<SearchBar onSubmit={(searchVal) => setSearchedCity(searchVal)} />}
                    center=""
                    right="ciao"
                />
                <ThreeColRow
                    left={<CurrentWeather city={searchedCity}/>}
                    center={"mappa"}
                    right={<PopularCities onCityClick={(city) => setSearchedCity(city) } />}
                />
            </Container>

        </Col>
    );
}

export default MyMain;