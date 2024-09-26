import React from "react";
const pathImages = '../assets/images/';
const pathIcons = '../assets/icons/';

const images = {
    tabBar: {
        Bg: require(pathImages + 'tabbar-vector.png'),
    },
    lean: {
        leanLeftPrimary: require(pathIcons + 'lean-left-light-primary.png'),
        leanLeftOrange: require(pathIcons + 'lean-left-light-orange.png'),
        leanLeftSuccess: require(pathIcons + 'lean-left-light-success.png'),
    },
    icon: {
        iconSample: require('../assets/favicon.png'),
        qrCode: require(pathIcons + 'qr-icon.png'),
        arrowright: require(pathIcons + 'arrow-right.png'),
        mapMarker: require(pathIcons + 'map-marker.png'),
        bank: require(pathIcons+ 'bank.png'),
    },
    home: {
        dice: require(pathImages + 'dice.png'),
        map: require(pathImages + 'map.png'),
    },
    transactions: {
        shoppingbag: require(pathIcons + 'ShoppingBag.png'),
        coffeecup: require(pathIcons + 'CoffeeCup.png'),
        basket: require(pathIcons + 'ShoppingBasket.png'),
    },
    properties: {
        plazaDark: require(pathImages + 'properties/plaza-dark.png'),
        eclipseDark: require(pathImages + 'properties/eclipse-dark.png'),
        wskyDark: require(pathImages + 'properties/wsky-dark.png'),
    }

}
export default images;
