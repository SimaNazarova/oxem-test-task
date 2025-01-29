'use client';
import { useStore } from '@/src/store/store';
import './SmallButton.scss';
interface ISmallButton {
  text: string;
  type: 'transparent' | 'color';
  isValid: boolean;
  className?: string;
}
function SmallButton({ text, type, isValid, className }: ISmallButton) {
  const { setOpenModal } = useStore();

  const openModal = () => {
    setOpenModal(true);
  };
  return (
    <button onClick={openModal} disabled={!isValid} className={`smallButton smallButton_${type} ${className}`}>
      {text}
    </button>
  );
}

export default SmallButton;
