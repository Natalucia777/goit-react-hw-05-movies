import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Text = styled.div`
  font-size: 20px;
  color: gray;
  font-weight:500;
  padding:10px;
  `;
const Message = ({children}) => {
    return <Text>{children}</Text>;
};
Message.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Message;