import './Overview.css';
import Chart from 'react-apexcharts';

const Overview = () => {
  return (
    <div className="overview">
      <div className="up">
        <h3 className="heading">Overview</h3>
        <select name="range" id="range">
          <option value="quarterly">Quarterly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <h5 className="subHeading">Monthly Earning</h5>

      <div className="down">
        <Chart
          type="bar"
          width={800}
          height={300}
          series={[{ name: 'overview data', data: [6, 4.5, 9, 7.5, 8, 4, 8, 9, 8.5, 7.5, 7, 7.9] }]}
          options={{
            states: {
              normal: {
                filter: {
                  type: 'none',
                  value: 0,
                },
              },
              hover: {
                filter: {
                  type: 'darken',
                  value: 0,
                },
              },
              active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                  type: 'darken',
                  value: 0,
                },
              },
            },

            colors: ['#eeeaea'],

            plotOptions: {
              bar: {
                borderRadius: 10,
              },
            },

            chart: {
              toolbar: {
                show: false,
              },
            },

            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

              labels: {
                style: {
                  fontSize: 14,
                  fontWeight: 600,
                },
              },

              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },

            yaxis: {
              show: false,
            },

            dataLabels: {
              enabled: false,
            },

            grid: {
              show: false,
            },

            legend: {
              show: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Overview;
