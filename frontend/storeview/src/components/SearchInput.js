//SearchInput.js
import {InputGroup, FormControl,} from 'react-bootstrap';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../css/SearchInput.css';

function SearchInput() {
	return (

    <InputGroup className="mb-3">
	
    <FormControl
    placeholder="검색"
    aria-label="search box"
    />
  </InputGroup>
  )
}

export default SearchInput;