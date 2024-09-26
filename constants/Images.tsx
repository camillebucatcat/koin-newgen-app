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
    },
    home: {
        dice: require(pathImages + 'dice.png'),
    }
}
export default images;
