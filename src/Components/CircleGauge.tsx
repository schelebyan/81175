import { keyframes, styled } from "goober";
import { useEffect, useState } from "react";
import { project } from "../utils/maths";

interface Props {
  value: number;
}

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Bar = styled("circle")`
  cx: var(--half-size);
  cy: var(--half-size);
  r: var(--radius);
  stroke-width: var(--stroke-width);
  fill: none;
  stroke-linecap:butt;
  transform: rotate(153deg);
  transform-origin: var(--half-size) var(--half-size);
  stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: var(--theme-card-accent-color);
`;
const Bg = styled("circle")`
  cx: var(--half-size);
  cy: var(--half-size);
  r: var(--radius);
  stroke-width: var(--stroke-width);
  fill: none;
  stroke-linecap:butt;
  stroke: var(--theme-gauge-bg-color);
`;
const Rect = styled("rect")`
  width: var(--size);
  height: var(--size);
  fill: var(--theme-card-bg-color);
  transform-origin: var(--half-size) var(--half-size);
  transform: rotate(45deg);
  y: 39;
  x: 39;
`;

export default function CircleGauge({ value }: Props): JSX.Element {
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const progress = project(value, 0, 100, 0, 65);


  const offset = (value.toString().length === 3) ? 36 : (value.toString().length === 2) ? 26 : 17;

  useEffect(() => {
    const timer = setTimeout(() => setCurrentProgress(progress), 500);
    return () => clearTimeout(timer);
  }, [progress]);

  const progressAnimation = keyframes`
    from {
      --progress: ${currentProgress};
    }
    to {
      --progress: ${progress};
    }
  `;

  const Progress = styled("svg")`
    display: block;
    margin: 0 auto;
    width: var(--size);
    height: calc(var(--size) - 20px);
    animation: ${progressAnimation} 100ms linear 0s 1 forwards;
  `;

  const Text = styled("text")`
    fill: white;
    transform-origin: var(--half-size) var(--half-size);
    transform: translate(calc(var(--half-size) - ${offset}px), calc(var(--half-size) + 8px));
    fill: var(--theme-card-accent-color);
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    font-family: "Inter", sans-serif;
  `;


  return (
    <Container className="circular-progress">
      <Progress className="circular-progress">
        <Bg></Bg>
        <Bar></Bar>
        <Rect></Rect>
        <Text>{value}%</Text>
      </Progress>
    </Container>
  );
}