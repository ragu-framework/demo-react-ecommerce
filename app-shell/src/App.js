import { useEffect, useState } from "react";
import styled from "styled-components";

const { RaguComponent } = require("ragu-client-react");

const Head = styled.header`
  position: fixed;
  display: flex;
  background: linear-gradient(86.92deg, rgba(215,55,113,0.6) 5.1%, rgba(255, 255, 255, 0) 97.29%), rgba(246,183,41,0.6);
  backdrop-filter: blur(6px);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  h1, a {
    margin: 0;
    font-size: 1rem;
    color: white;
    text-decoration: none;
  }
`;

const Content = styled.main`
  padding: 80px 20px;
`;

function App() {
  const catalogURL = "http://localhost:4200/components/catalog";
  const [mainContent, setMainContent] = useState(catalogURL);

  useEffect(() => {
    window.addEventListener('show-pokemon', (e) => {
      setMainContent("http://localhost:4200/components/pokemon-detail?id=" + e.detail.id);
    });
  })

  return (
    <div>
      <Head>
        <h1>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            setMainContent(catalogURL);
          }}>
            Welcome to Ragu React Cart
          </a>
        </h1>
        <RaguComponent src="http://localhost:3200/" />
      </Head>

      <Content>
        <RaguComponent src={mainContent} />
      </Content>
    </div>
  );
}

export default App;
