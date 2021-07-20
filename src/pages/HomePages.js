import Carousel from "react-bootstrap/cjs/Carousel";
import React, {Component} from "react";
import Slider from '../Сomponents/Slider'
import Header from "../Сomponents/Header";
import Footer from "../Сomponents/Footer";
import '../style/homepages.css'

export default class HomePages extends Component {
    render() {
        return (
            <>
            <Header/>
            <div className={'carousel-div'}>
                <Slider/>
            </div>
                 <div>
                     <div className="View">
                         <div className="View_block1">
                             <div className={'good'}><img src={'https://img.icons8.com/material-outlined/452/discount.png'}/></div>
                             <div className="viwa">
                                 <div className="omg">Цены</div>
                                 <div className="veiw">Мы старались сделать цены максимально выгодными для покупателей</div>
                         </div>
                         </div>
                         <div className="View_block3">
                             <div className={'good'}><img src={'https://img.icons8.com/ios/452/good-quality--v1.png'}/></div>
                             <div className="viwa">
                                 <div className="omg">Качество</div>
                                 <div className="veiw">Мебель, которую мы продаём, проходит множество проверок качества</div>
                             </div>
                         </div>
                     </div>
                 </div>
            <Footer/>
            </>
        )
    }
}

