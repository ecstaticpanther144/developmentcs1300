import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Filters(props) {
  const selectFilterType = props.selectFilterType
  const selectFilterStyle = props.selectFilterStyle
  const selectSort = props.selectSort
  return (
    <div>
      <h3>Sort and filter</h3>
      <DropdownButton size = "sm" title="Color" onSelect={selectFilterType}>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="black">Black</Dropdown.Item>
            <Dropdown.Item eventKey="blue">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="pink">Pink</Dropdown.Item>
            <Dropdown.Item eventKey="white">White</Dropdown.Item>
      </DropdownButton>
      <DropdownButton size = "sm" title="Style" onSelect={selectFilterStyle}>
          <Dropdown.Item eventKey = "All">All</Dropdown.Item>
          <Dropdown.Item eventKey="boot">Boots</Dropdown.Item>
          <Dropdown.Item eventKey="sandal">Sandals</Dropdown.Item>
          <Dropdown.Item eventKey="sneaker">Sneakers</Dropdown.Item>
      </DropdownButton>
      <DropdownButton size = "sm" title="Sort by price" onSelect={selectSort}>
          <Dropdown.Item eventKey="lowtohigh">Price low-to-high</Dropdown.Item>
          <Dropdown.Item eventKey="hightolow">Price high-to-low</Dropdown.Item>
      </DropdownButton>
    </div>
        
  );
}

export default Filters;