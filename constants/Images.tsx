import React from "react";
const pathImages = '../assets/images/';
const pathIcons = '../assets/icons/';

const images = {
    tabBar: {
        Bg: require(pathImages + 'tabbar-vector.png'),
    },
    icon: {
        iconSample: require('../assets/favicon.png'),
        qrCode: require(pathIcons + 'qr-icon.png'),
        arrowright: require(pathIcons + 'arrow-right.png'),
        mapMarker: require(pathIcons + 'map-marker.png'),
    },
    home: {
        dice: require(pathImages + 'dice.png'),
        map: require(pathImages + 'map.png'),
    },
    transactions: {
        shoppingbag: require(pathIcons + 'ShoppingBag.png'),
        coffeecup: require(pathIcons + 'CoffeeCup.png'),
        basket: require(pathIcons + 'ShoppingBasket.png'),
    }

}
export default images;
