export interface RadioButtonProps {
  changed: () => void;
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
}

export const RadioButton = (props: RadioButtonProps) => {
  const { changed, id, isSelected, label, value } = props;
  return (
    <div className="RadioButton">
      <input
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
