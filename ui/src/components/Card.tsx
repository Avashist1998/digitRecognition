import type { NumberCardData } from '../types/NumberCardData';



interface Props {
  card: NumberCardData,
}

const Card = ({card}: Props) => {
  return (

      <div className='w-[200px] h-auto p-4 ml-4'>
        <h2 className="text-2xl">{card.title}</h2>
      </div>
  );
};

export default Card;