import './SmallButton.scss';
interface ISmallButton {
  text: string;
  type: 'transparent' | 'color';
}
function SmallButton({ text, type }: ISmallButton) {
  return <button className={`smallButton smallButton_${type}`}>{text}</button>;
}

export default SmallButton;
