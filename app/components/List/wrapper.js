import styled from 'styled-components';
import { PropTypes } from 'react';
const Wrapper = styled.div`
  padding-top: 3rem;
`;

export default Wrapper;


Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
