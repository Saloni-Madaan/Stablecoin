import Portfolios from './portfolioApi'
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(Portfolios)
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      {portfolioData.map((curElem)=>{
                console.log(curElem)
                return(
        
                 <div className="portfolio" key={curElem.id}>
                          <span className="tportfolio-id">{curElem.id}</span><br/>
                          <span className="portfolio-name">{curElem.name}</span><br/><br/>
                          
                      </div>
                )
                }) }
    </div>
  );
};
export default Portfolio;