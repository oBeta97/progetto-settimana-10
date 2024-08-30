import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchBar = (props) => {

    const [searchVal, setSearchVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchVal('');
        props.onSubmit(searchVal);
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <InputGroup >
                <InputGroup.Text
                    id="search-bar"
                    className="p-2 border-0 text-white dark-blue-trasparent"
                >
                    <Search size={20} />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Search location"
                    aria-label="Search location"
                    aria-describedby="search-bar"
                    className="border-0 text-white dark-blue-trasparent"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                />
            </InputGroup>
        </Form>
    );
}

export default SearchBar;