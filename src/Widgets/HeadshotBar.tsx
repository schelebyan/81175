import { useSnapshot } from "valtio";
import Card from "../Components/Card";
import CardHeader from "../Components/CardHeader";
import { useWidgetsState } from "../context";
import BarGauge from "../Components/BarGauge";

export default function HeadshotBar() {

  const state = useWidgetsState();
  const { slider } = useSnapshot(state);

  return (
    <Card>
      <CardHeader title={`${slider}%`} subtitle="Headshot" tag="AK-47" />
      <BarGauge numCells={14} percentActive={slider} />
    </Card>
  );
}