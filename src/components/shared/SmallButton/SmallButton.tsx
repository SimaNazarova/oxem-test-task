import './SmallButton.scss';
interface ISmallButton {
  text: string;
  type: 'transparent' | 'color';
  isValid: boolean;
  className?: string;
}
function SmallButton({ text, type, isValid, className }: ISmallButton) {
  console.log(isValid, 'isValid');
  return (
    <button disabled={!isValid} className={`smallButton smallButton_${type} ${className}`}>
      {text}
    </button>
  );
}

export default SmallButton;
