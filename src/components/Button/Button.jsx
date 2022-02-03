import PropTypes from 'prop-types';
import {Button} from './Button.styled';

const Button = ({ pagination }) => {
  return (
    <Button type="button" onClick={() => pagination()}>
      Load more
    </Button>
  );
};

export default Button;

Button.propTypes = {
  pagination: PropTypes.func.isRequired,
};