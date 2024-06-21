import styled from 'styled-components'

export const EachListContainer = styled.li`
  list-style-type: none;
  margin-right: 30px;
`
export const EachButton = styled.button`
  cursor: pointer;
  outline: none;
  height: 40px;
  width: 100px;
  border-radius: 18px;
  border: 1px solid #db1c48;
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 500;
  color: ${props => (props.activeButton ? '#ffffff' : '#db1c48')};
  background-color: ${props =>
    props.activeButton ? '#db1c48' : 'transparent'};
`
