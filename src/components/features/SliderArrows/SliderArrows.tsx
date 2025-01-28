import './SliderArrows.scss';

interface ISlideArrows {
  animation: () => void;
  svgRef: React.Ref<SVGCircleElement> | null;
}

const SliderArrows = ({ svgRef, animation }: ISlideArrows) => {
  return (
    <div className='arrows' onClick={animation}>
      <button className='arrows__arrow-left'>
        <svg width='24' height='24' viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='40' fill='none' stroke='rgba(255, 255, 255,0.3)' strokeWidth='6' />
          <polygon
            points='15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293'
            stroke='#FFFF'
            strokeWidth={0}
            fill='#FFFF'
            transform='translate(26, 28) scale(2)'
            className='arrow'
          />
        </svg>
      </button>
      <button className='arrows__arrow-right'>
        <svg width='48' height='48' viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='40' fill='none' stroke='rgba(255, 255, 255,0.3)' strokeWidth='3' />

          <circle ref={svgRef} cx='50' cy='50' r='40' fill='none' stroke='#FFFF' strokeWidth='2' />

          <polygon
            points='7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707'
            stroke='#FFFF'
            strokeWidth={0}
            fill='#FFFF'
            transform='translate(30, 28) scale(2)'
          />
        </svg>
      </button>
    </div>
  );
};

export default SliderArrows;
