import { data, Scale } from "note-lib";
import { Base16Theme } from "../../colors/themes";
import { LabeledSelector } from "./LabeledSelector";

// TODO: CONSIDER DELETING - somewhat redundant with EquivKeySelector.

interface IEquivScaleSelectorProps {
  activeScale: Scale;
  minWidth?: string;
  onScaleSelect: (scale: Scale) => void;
  theme: Base16Theme;
}

const EquivScaleSelector = (props: IEquivScaleSelectorProps) => {
  const { 
    activeScale,
    minWidth,
    onScaleSelect,
    theme,
   } = props;
  
  return (
    <LabeledSelector<Scale>
      id="equiv-scale-selector"
      label="Equivalent Scales: "
      items={activeScale.getEquivScales(data.scales)}
      getValue={(s: Scale) => s.name}
      getDisplay={(s: Scale) => s.name}
      minWidth={minWidth}
      activeItem={activeScale}
      onChange={onScaleSelect}
      theme={theme}
    />
  );
}

export { EquivScaleSelector };
