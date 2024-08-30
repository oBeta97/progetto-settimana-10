import { Col, Row } from "react-bootstrap";
import { Cloud } from "react-bootstrap-icons";
import CityRow from "./CityRow";

const PopularCities = (props) => {

    const cities = [
        'Londra',
        'Parigi',
        'Roma',
        'Madrid',
        'Berlino',
    ]

    return (
        <div className="dark-blue-trasparent w-100 p-3 rounded-4">
            <h6>
                Popular cities
            </h6>

            {
                cities.map((city) => (
                    <CityRow city={city} onCityClick={(city) => props.onCityClick(city)} />
                ))
            }

        </div>
    );
};

export default PopularCities