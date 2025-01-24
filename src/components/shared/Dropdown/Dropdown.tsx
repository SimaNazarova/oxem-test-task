import Link from 'next/link';
import './Dropdown.scss';
import { useStore } from '../../../store/store';

interface IData {
  data: { id: number; title: string }[] | null;
}
function Dropdown({ data }: IData) {
  const { setOpenDropdown, setSubmenuId } = useStore();
  function closeDropdown() {
    setOpenDropdown(false);
    setSubmenuId(null);
  }
  return (
    <div className='dropdown'>
      <ul className='dropdown__ul'>
        {data?.map(item => {
          return (
            <li key={item.id} className='dropdown__li' onClick={closeDropdown}>
              <Link href='#'>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
