import React, {Component} from "react";
import Header from "../Сomponents/Header";
import Footer from "../Сomponents/Footer";
import CartCard from "../Сomponents/cartCard";


const userCart = () => {
        return(
         <div>
            <Header/>
              <div>
                  <CartCard/>
              </div>
            <Footer/>
         </div>
        )
}

export default userCart