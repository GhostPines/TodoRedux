import styled from "styled-components";


function Layout({ children }) {
  return (
    <StBackground>
      <StLayout>{children}</StLayout>
    </StBackground>
  );
}
const StBackground = styled.div`
  background-color: grey;
`;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  min-height: 80rem;
  background-color : grey;
`;

export default Layout;
