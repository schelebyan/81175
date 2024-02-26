import { useSnapshot } from "valtio";
import Card from "../Components/Card";
import CardHeader from "../Components/CardHeader";
import Slider from "../Components/Slider";
import { useWidgetsState } from "../context";

export default function HeadshotSlider() {

  const state = useWidgetsState();
  const { slider } = useSnapshot(state);

  const handleChange = (value: number) => {
    state.slider = value;
  }

  return (
    <Card>
      <CardHeader title={`${slider}%`} subtitle="Headshot" tag="AK-47" />
      <Slider value={slider} onChange={handleChange} />
    </Card>
  );
}