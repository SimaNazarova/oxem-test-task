import './SmallButton.scss';
interface ISmallButton {
  text: string;
  type: 'transparent' | 'color';
  isValid: boolean;
}
function SmallButton({ text, type, isValid }: ISmallButton) {
  console.log(isValid, 'isValid');
  return (
    <button disabled={!isValid} className={`smallButton smallButton_${type}`}>
      {text}
    </button>
  );
}

export default SmallButton;
