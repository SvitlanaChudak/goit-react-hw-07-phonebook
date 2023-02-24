
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(setFilter(event.target.value))
  }
    return (
        <Label>Find contacts by name
        <Input type="text" name="filter" value={filter} onChange={onChange}/>
    </Label>
    )
}

