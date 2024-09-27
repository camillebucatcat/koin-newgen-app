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
        bg: {
            gleamorBg:  require(pathImages + 'properties/gleamor-bg-sm.png'),
            nexyraBg:  require(pathImages + 'properties/nexyra-bg-sm.png'),
            gambitBg:  require(pathImages + 'properties/gambit-bg-sm.png'),
            eliteBg:  require(pathImages + 'properties/elite-bg-sm.png'),
            fortunaBg:  require(pathImages + 'properties/fortuna-bg-sm.png'),
        },
        logo: {
            gleamorLogoLight:  require(pathImages + 'properties/gleamor-logo-light.png'),
            nexyraLogoLight:  require(pathImages + 'properties/nexyra-logo-light.png'),
            gambitLogoDark:  require(pathImages + 'properties/gambit-logo-dark.png'),
            eliteLogoDark:  require(pathImages + 'properties/elite-logo-dark.png'),
            fortunaLogoLight:  require(pathImages + 'properties/fortuna-logo-light.png'),

            ardentxs: require(pathImages + 'properties/ardent-xs.png'),
            acrexs: require(pathImages + 'properties/acres-xs.png'),
            konamiEliteXs: require(pathImages + 'properties/konami-elite-xs.png'),
            konamixs: require(pathImages + 'properties/konami-xs.png'),
        },
        
        plazaDark: require(pathImages + 'properties/plaza-dark.png'),
        eclipseDark: require(pathImages + 'properties/eclipse-dark.png'),
        wskyDark: require(pathImages + 'properties/wsky-dark.png'),
    },
    discover: {
        topBg: require(pathImages + 'discover-bg-1.png'),
        botBg: require(pathImages + 'discover-bg-2.png'),
        edclogo: require(pathIcons + 'edc-logo.png'),
        arrowdown: require(pathIcons + 'double-arrow-down.png'),
        bookmark: require(pathIcons + 'bookmark.png'),

        shopping:{
            pic1: require(pathImages + 'discover/shopping-1.png'),
            pic2: require(pathImages + 'discover/shopping-2.png'),
        },
        gaming:{
            pic1: require(pathImages + 'discover/gaming-1.png'),
            pic2: require(pathImages + 'discover/gaming-2.png'),
        },
        dining:{
            pic1: require(pathImages + 'discover/dining-1.png'),
            pic2: require(pathImages + 'discover/dining-2.png'),
        },
        events:{
            pic1: require(pathImages + 'discover/events-1.png'),
            pic2: require(pathImages + 'discover/events-2.png'),
        },
        shows:{
            pic1: require(pathImages + 'discover/shows-1.png'),
            pic2: require(pathImages + 'discover/shows-2.png'),
        },
    }

}
export default images;
