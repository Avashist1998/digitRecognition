import type { NumberCardData } from '../types/NumberCardData';
import PlayPopUp from './PlayPopUp';
interface Props {
  card: NumberCardData,

}

const Card = ({card}: Props) => {



  return (
    <div className="opacity-100">
      <div className='w-auto h-auto'>
        <h2>{card.title}</h2>
        {/* <p>{card.description}</p> */}
      </div>
    </div>
  );
};

export default Card;