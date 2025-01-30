import { useStore } from '@/src/store/store';
import './LargeButton.scss';
interface ILargeButton {
  text: string;
  isValid: boolean;
}
function LargeButton({ isValid, text }: ILargeButton) {
  const { setOpenModal } = useStore();
  const openModal = () => {
    setOpenModal(true);
  };
  return (
    <button onClick={openModal} disabled={!isValid} className='largeButton'>
      {text}
    </button>
  );
}

export default LargeButton;
