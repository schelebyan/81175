import { useSnapshot } from "valtio";
import Card from "../Components/Card";
import CircleGauge from "../Components/CircleGauge";
import { useWidgetsState } from "../context";
import { styled } from "goober";
import Chart from "../Components/Chart";
import Statistic from "../Components/Statistic";
import { randomInteger } from "../utils/maths";

const Title = styled("h1")`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-align: center;
  color: var(--theme-card-headline-color);
`;
const Description = styled("p")`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  color: var(--theme-card-text-color);
  margin: 4px 0;
`;
const Percent = styled("span")`
  font-weight: 600;
  color: var(--theme-card-accent-color);
`;

export default function HeadshotStats() {
  const state = useWidgetsState();
  const { slider } = useSnapshot(state);

  return (
    <Card>
      <CircleGauge value={slider} />
      <Title>Headshot</Title>
      <Description><Percent>24%</Percent> higher than your last 15 average</Description>
      <Chart numBars={15} />
      <Statistic title="Statistic 1" value={randomInteger(750, 1000)} />
      <Statistic title="Statistic 2" value={randomInteger(750, 1000)} />
      <Statistic title="Statistic 3" value={randomInteger(750, 1000)} />
    </Card>
  );
}