import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.a`

  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: red;
  border: 2px solid red;
`;

export default function ShowError({ message, setMessage }) {
  useEffect(() => () => setTimeout(() => {
    setMessage('');
  }, 5000), [message]);

  return ((message !== '') && <P><b>{message}</b></P>);
}
ShowError.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,

};
