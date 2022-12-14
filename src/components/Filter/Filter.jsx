import PropTypes from 'prop-types';
import { Label, Input } from './Filter.style';
export const Filter = ({ onChange, filter }) => {
    return (
         <Label>
        Find contacts by name
          <Input  type="text"
            value={filter}
            onChange={onChange} 
            name="filter"
          placeholder="enter name"
          /> 
        </Label>  
    )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};