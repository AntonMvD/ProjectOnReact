import React, {Component} from "react";
import Header from "../Сomponents/Header";
import Footer from "../Сomponents/Footer";
import '../style/menu.css'
import mebel from "../data/mebel";
import CreateCard from "../Сomponents/mebelCard";
import {connect} from "react-redux";

const CardMenu = ({match:{params:{categoryName}}})  => {

    return (
        <>
            <Header/>
            <h1>{categoryName}</h1>
            <div className={'cards'}>
            {
                mebel.filter(({tp}) => tp.toLowerCase() === categoryName.toLowerCase()).map((cardInfo) => <CreateCard{...cardInfo}/>)
            }
            </div>
            <Footer/>
        </>
    )
}


export default CardMenu
