import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Customers.css';

const Customers = () => {
  return (
    <div className="customers">
      <h3 className="heading">Customers</h3>
      <h5 className="subHeading">Customers that buy products</h5>

      <div className="circularBar">
        <div className="CircularProgressbarWithChildren">
          <CircularProgressbarWithChildren
            value={65}
            text={`65%`}
            styles={buildStyles({
              pathColor: '#7549ea',
              trailColor: '#eee',
              strokeLinecap: 'butt',
            })}>
            {/* Foreground path */}
            <CircularProgressbar
              value={15}
              styles={buildStyles({
                trailColor: 'transparent',
                strokeLinecap: 'butt',
              })}
            />
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default Customers;
