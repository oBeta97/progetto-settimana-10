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
            <h6 className="fw-bold p-0 m-0">
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