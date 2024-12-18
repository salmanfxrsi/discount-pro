import PropTypes from "prop-types";

const Stat = ({ data, onSaleShop }) => {
  return (
    <div className="stats shadow w-full bg-winter">
      <div className="stat">
        <div className="stat-figure text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-white">New Users</div>
        <div className="stat-value text-white">4200</div>
        <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-white">On Sale</div>
        <div className="stat-value text-white">{onSaleShop.length}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-white">Total Brands</div>
        <div className="stat-value text-white">{data.length}</div>
      </div>
    </div>
  );
};

Stat.propTypes = {
    data: PropTypes.array,
    onSaleShop: PropTypes.array
}

export default Stat;
