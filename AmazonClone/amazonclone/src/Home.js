import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className="home">
      <div className="home__container">
          <img className="home__image"
          src="https://images-fe.ssl-images-amazon.com/images/G/35/x-site/xmas/gw_desktop_hero_3000x1200._CB416407190_.jpg"
          alt=""
          />

      

      <div className="home__row">
          <Product
          title="Organic Cokies"
          price={29.33}
          image="https://m.media-amazon.com/images/I/81WsrpTjjWL._AC_UL640_QL65_.jpg"
          rating={5}
          />
          <Product/>
         
         
      </div>

      <div className="home__row">
          <Product/>
          <Product/>
          <Product/>
      </div>

      <div className="home__row">
          <Product/>
      </div>
      </div>
      </div>
     
  );
}

export default Home;