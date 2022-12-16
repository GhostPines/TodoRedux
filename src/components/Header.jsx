import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <StMainLogo>TODOLIST</StMainLogo>
      <StLogoDiscription>Do Something Cool</StLogoDiscription>
    </StHeader>

  );
}

const StHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction : column;
  padding: 25px;

`;
const StMainLogo = styled.div`
  font-size: 70px;
  font-weight: bold;
  letter-spacing: 10px;
  color : coral;
  location : center;
`;

const StLogoDiscription = styled.div`
margin-top : 4rem;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 5px;
  color: lightcoral;
`;


export default Header;
