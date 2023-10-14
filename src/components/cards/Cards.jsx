import './Cards.css';
import { CardsData } from '../../assets/Data/Data';
import Card from '../card/Card';

const Cards = () => {
  return (
    <div className="cards">
      {CardsData.map((card) => (
        <div className="parentContainer" key={card.title}>
          <Card
            png={card.png}
            title={card.title}
            value={card.value}
            growth={card.growth}
            growthText={card.growthText}
            background={card.background}
            color={card.color}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
