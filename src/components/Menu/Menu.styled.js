import styled from 'styled-components';

export const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
/* background: #EFFFFA; */
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
height: 50vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
right: 0;
transition: transform 0.3s ease-in-out;
z-index: 0;
@media (max-width: 576px) {
    width: 100%;
  }

a {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #0D0C1D;
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: #343078;
  }
}
`