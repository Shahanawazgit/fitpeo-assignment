import Cards from '../cards/Cards';
import './MainDash.css';
import { BsSearch } from 'react-icons/bs';
import Overview from './../overview/Overview';
import Customers from './../customers/Customers';
import ProductSell from '../productSell/ProductSell';

const MainDash = () => {
  return (
    <div className="mainDash">
      <header>
        <div className="left">Hello Shahrukh 👋,</div>
        <div className="right">
          <BsSearch />
          <input type="text" placeholder="Search" />
        </div>
      </header>
      <Cards />
      <section className="middle">
        <div className="overview">
          <Overview />
        </div>
        <div className="customers">
          <Customers />
        </div>
      </section>
      <section className="bottom">
        <ProductSell />
      </section>
    </div>
  );
};

export default MainDash;
