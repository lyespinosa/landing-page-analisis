import React from 'react'

import appLogo from '../images/logo.png'

import coverImage from '../images/collage.png'

import compromiso from '../images/compromiso.jpg'
import maps from '../images/map.png'
import bazipaipai_unfilled from '../images/bazipaipai_64.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'


import collage2 from '../images/collage2.png'
import collage3 from '../images/collage3.png'
import purple_phones from '../images/purple_phones.png'
import purple_light from '../images/purple_light.jpg'

import discordImage from '../images/discord.png'

export const initialState = {
    appURL: '#',

    appLogo: appLogo,
    appName: 'LylRg',

    coverAnteTitle: 'Somos',
    coverTitle: 'LylRg Software development',
    coverTextPart1: 'La página web perfecta para ti',
    coverTextPart2: 'Sin importar el tamaño de tu negocio',

    coverImage: coverImage,

    endorsementTitle: `Haz que tu negocio sea un más conocido y aumenta tus ventas.`,
    endorsementText: `Con la landing page perfecta para promocionar tu negocio, incluyendo servicios de difusión extra.`,
    endorsementList: [
        {
            title: `DreamHub: Visualized Stories`,
            titleColor: `orangeRed`,
            image: maps,
        },  
        
        {
            title: `BaZiPaiPai: Know Your Destiny`,
            titleColor: `black`,
            image: bazipaipai_unfilled,
            URL: `https://bazipaipai.com`,
        },
        {
            title: `SpindriftHome: HOA Management`,
            titleColor: `orangeRed`,
            image: spindrifthome_filled,
            URL: `https://spindrifthome.com`,
        },
    ],

    sectionList: [
        {
            'title': `Nuestro compromiso y metas`,
            'text': `Nuestro compromiso es ser una empresa confiable para cualquier que desee darse a conocer dentro de los negocios en línea. Nuestras metas son impulsar el éxito de nuestros clientes y expandir nuestro impacto positivo en el mundo digital. Si estás buscando un equipo comprometido y apasionado que te ayude a alcanzar tus objetivos en línea, estaremos encantados de trabajar contigo hacia un futuro de éxito compartido.`,
            'image': compromiso,
        },
        {
            'title': `El principal servicio`,
            'text': `Una landing page es una página web diseñada específicamente para convertir visitantes en clientes potenciales o clientes reales. En nuestra empresa, nos especializamos en diseñar landing pages que sean efectivas, atractivas y centradas en el cliente.`,
            'image': collage2,
        },
        {
            'title': `Servicios extras`,
            'text': `En caso de ser necesario, te ofrecemos crear tus propías redes redes sociales o mostrar tu página web en aplicaciónes de mapas, para que así tu landing page sea visible para la mayoría de personas en la zona donde se encuentre tu negocio.`,
            'image': collage3,
        },
        {
            'title': `Ejemplos de nuestro trabajo`,
            'text': `Don't let social anxiety get in the way of enjoying your favorite events and concerts! With our app, you can chat with others and make new friends in a safe, welcoming environment.`,
            'image': purple_phones,
        },
        {
            'title': `¿Quiéres más detalles?`,
            'text': `Our app is the perfect way to enhance your experience at events and concerts! Connect with others, share your thoughts and opinions, and discover new artists and events to love.`,
            'image': purple_light,
        },
    ],

    discordImage: discordImage,
    discordLink: '#',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
