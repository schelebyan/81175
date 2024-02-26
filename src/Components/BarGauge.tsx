import { styled } from 'goober';
import { project } from '../utils/maths';

interface Props {
  numCells: number;
  percentActive: number;
}

const Container = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Cell = styled("div")`
  width: 100%;
  height: 28px;
  margin: 0 1px;
  &:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  &:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;

const active = {
  border: "1px solid var(--theme-card-accent-color-lighter)",
  backgroundColor: "var(--theme-card-accent-color)",
  animation: "fadeInBackgroundAnimation ease 500ms",
  animationIterationCount: 0,
};
const inActive = {
  border: "1px solid var(--theme-gauge-border-color)",
  backgroundColor: "var(--theme-gauge-bg-color)",
  animation: "fadeOutBackgroundAnimation ease 500ms",
  animationIterationCount: 0,
};


export default function BarGauge({ numCells, percentActive }: Props): JSX.Element {
  const numCellsActive = project(percentActive, 0, 100, 0, numCells);
  const cells = [];
  for (let i = 0; i < numCells; i++) {
    cells.push(<Cell style={(numCellsActive > i) ? active : inActive} key={i} />);
  }
  return (
    <>
      <Container>
        {cells}
      </Container>
    </>
  );
}
