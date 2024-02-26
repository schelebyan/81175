import { styled } from 'goober';
import { project, randomInteger } from '../utils/maths';

interface Props {
  title: string;
  value: number;
}

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 4px 0;
`;
const BarBg = styled("div")`
  width: 100%;
  height: 6px;
  background-color: var(--theme-gauge-bg-color);
  border-radius: 3px;
`;

const Title = styled("p")`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  color: var(--theme-card-text-color);
`;
const Value = styled("p")`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: var(--theme-card-headline-color);
  align-self: center;
`;

export default function Statistic({ title, value }: Props): JSX.Element {

  const barPercent = project(value, 500, 1000, 0, 100);
  const markerPercent = (barPercent - randomInteger(10, 30)) * -1;

  const Bar = styled("div")`
    width: ${barPercent}%;
    height: 6px;
    background-color: var(--theme-card-accent-color-medium);
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: 2px solid var(--theme-card-accent-color-lighter);
    position: relative;
    top: -6px;
    margin-bottom: -6px;
  `;

  const Marker = styled("div")`
    width: 2px;
    height: 12px;
    background-color: var(--theme-states-marker-color);
    position: relative;
    top: -9px;
    right: ${markerPercent}%;
    margin-bottom: -12px;
  `;

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Container>
      <BarBg />
      <Bar />
      <Marker />
    </>
  );
}
