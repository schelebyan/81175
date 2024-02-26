import ReactSlider from "react-slider";
import '../slider.css';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function Slider({ value, onChange }: Props): JSX.Element {

  return (
    <ReactSlider
      className="slider"
      thumbClassName="slider-thumb"
      trackClassName="slider-track"
      min={0}
      max={100}
      defaultValue={0}
      value={value}
      onChange={(value) => onChange(value)}
    />
  );
}