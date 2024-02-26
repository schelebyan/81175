import { styled } from "goober";
import HeadshotBar from "./Widgets/HeadshotBar";
import HeadshotSlider from "./Widgets/HeadshotSlider";
import HeadshotStats from "./Widgets/HeadshotStats";

function App() {

  const Container = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    @media screen and (max-width: 992px) {
      padding: 8px 16px;
    }
  `;
  const Item = styled("div")`
    flex: 0 1 calc(33% - 8px);
    color:var(--theme-card-text-color);
    box-sizing: border-box;
    margin: 16px 0;
    @media screen and (max-width: 992px) {
      flex: 0 1 50%;
      margin: 8px 0;
    }
    @media screen and (max-width: 768px) {
      flex: 0 1 100%;
      margin: 8px 0;
    }
  `;

  return (
    <>
      <Container>
        <Item>
          <HeadshotBar />
        </Item>
        <Item>
          <HeadshotSlider />
        </Item>
        <Item>
          <HeadshotStats />
        </Item>
      </Container>
    </>
  )
}

export default App
