import styled from 'styled-components';

export const Input = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid #484747;
  outline: transparent;

  &:focus {
    border-color: #ecd62f;
  }
`;
export const Button = styled.button`
  width: 75px;
  height: 40px;
  cursor: pointer;
  background-color: #eaafaf;
  border: 1px solid #484747;
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #ecd62f;
    color: white;
    border: none;
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 3px;
}
`;
