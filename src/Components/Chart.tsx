import { styled } from 'goober';
import { randomInteger } from '../utils/maths';

interface Props {
  numBars: number;
}

const Container = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
  margin: 5px 0 20px 0;
`;
const Average = styled("div")`
  display: block;
  width: 100%;
  height: 1px;
  border-top: 1px dashed var(--theme-chart-border-color);
  position: relative;
  top: 25px;
  margin: 0;
`;

export default function Chart({ numBars }: Props): JSX.Element {

  const Cell = styled("div")`
    width: 100%;
    height: 0px;
    margin: 0 2px;
    border-top: 3px solid var(--theme-chart-border-color);
    background-color: var(--theme-gauge-bg-color);
    &:last-child {
      background-color: var(--theme-card-accent-color-medium);
      border-top: 3px solid var(--theme-card-accent-color-lighter);
    }
  `;

  const cells = [];
  for (let i = 0; i < numBars; i++) {
    cells.push(<Cell style={{ height: (i !== numBars - 1) ? randomInteger(15, 34) : 40 }} key={i} />);
  }
  return (
    <>
      <Average />
      <Container>
        {cells}
      </Container>
    </>
  );
}
