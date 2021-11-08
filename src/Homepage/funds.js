import { Link } from "react-router-dom";
import data from "./data";

const Funds = () => {
  return (
    <div className="funds align-middle">
      <h1>
        <b className="bg-green-darker xl:visible">Funds</b>
      </h1>
      {data.map((item, index) => {
        const { name, description, date, value } = item;
        return (
          <div className="funds-item" key={index}>
            <div className="funds-item-content">
              <h2>{name}</h2>
              <p>{description}</p>
              <p>{date}</p>
              <p>{value}</p>
            </div>
            <button className="container bg-green-light">add</button>
          </div>
        );
      })}
    </div>
  );
};
export default Funds;
