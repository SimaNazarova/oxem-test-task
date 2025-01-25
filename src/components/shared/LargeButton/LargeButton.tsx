import './LargeButton.scss';
interface ILargeButton {
  text: string;
}
function LargeButton({ text }: ILargeButton) {
  return <button className='largeButton'>{text}</button>;
}

export default LargeButton;
