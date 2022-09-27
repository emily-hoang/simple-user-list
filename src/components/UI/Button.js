import styled from 'styled-components';

const StyledButton = styled.button`
background: white;
font-size: 1rem;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #ccc;
border-radius: 3px;
`
const Button = props => {
  return <StyledButton>{props.children}</StyledButton>;
}

export default Button;