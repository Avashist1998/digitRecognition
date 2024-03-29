import Grid from '../components/Grid';
import type { NumberCardData } from '../types/NumberCardData';

const PlayPage = () => {


    const cards = [
        { id: 0, title: 'Number 0' } as NumberCardData,
        { id: 1, title: 'Number 1' } as NumberCardData,
        { id: 2, title: 'Number 2' } as NumberCardData,
        { id: 3, title: 'Number 3' } as NumberCardData,
        { id: 4, title: 'Number 4' } as NumberCardData,
        { id: 5, title: 'Number 5' } as NumberCardData,
        { id: 6, title: 'Number 6' } as NumberCardData,
        { id: 7, title: 'Number 7' } as NumberCardData,
        { id: 8, title: 'Number 8' } as NumberCardData,
        { id: 9, title: 'Number 9' } as NumberCardData,
    ]
    return (
        <div className="content-center">
            <Grid cards={cards}/>
        </div>
    );
}


export default PlayPage;