import MoonImg from '../assets/destination/image-moon.png';
import MarsImg from '../assets/destination/image-mars.png';
import EuroImg from '../assets/destination/image-europa.png';
import TitanImg from '../assets/destination/image-titan.png';

import crewAnsari from '../assets/crew/image-anousheh-ansari.png';
import crewHurley from '../assets/crew/image-douglas-hurley.png';
import crewMark from '../assets/crew/image-mark-shuttleworth.png';
import crewVictor from '../assets/crew/image-victor-glover.png';

import launchVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spacePort from '../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsule from '../assets/technology/image-space-capsule-landscape.jpg';


export const PLANETS = [
    {id: 'MOON',
     url: MoonImg,
     text: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",   
     distance: '384,400 KM',
     time: '3 DAYS',   
    },
    {id: 'MARS',
    url: MarsImg,
    text: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the talles planetary mountain in our solar system. It's two and a half times the size of Everest!",  
    distance: '225 MIL. KM',
    time: '9 MONTHS',   
    },
    {id: 'EUROPA',
    url: EuroImg,
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it;s perfect for a bit of ice skating, curling, hockey, or simplete relaxation in your snug wintery cabin.",  
    distance: '628 MIL. KM',
    time: '3 YEARS',   
    },
    {id: 'TITAN',
    url: TitanImg,
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",  
    distance: '1.6 BIL. KM',
    time: '7 YEARS',   
    }
];


export const CREW = [
    {
        id: 'DOUGLAS HURLEY',
        position: 'COMMANDER',
        url: crewHurley,
        text: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the thid time as commander of Crew Dragon Demo-2.'
    },
    {
        id: 'MARK SHUTTLEWORTH',
        position: 'MISSION SPECIALIST',
        url: crewMark,
        text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the lunix-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    },
    {
        id: 'VICTOR GLOVER',
        position: 'PILOT',
        url: crewVictor,
        text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International SPace Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    },
    {
        id: 'ANOUSHEH ANSARI',
        position: 'FLIGHT ENGINEER',
        url: crewAnsari,
        text: 'Anousheh Ansari is an Iranian American eginner and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the fist self-funded woman to flu to the ISS, and the first Iranian in space.'
    }

]

export const SPACESHIPS = [
    {
        id: 'LAUCH VEHICLE',
        url: launchVehicle,
        text: 'A lauch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth`s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Stading 150 metres tall, it`s quite an awe-inspiring sight on the launch'
    },
    {
        id: 'SPACEPORT',
        url: spacePort,
        text: 'A spaceport or consmodrome is a site for lauching(or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spacepor is ideally situated to take advantage of the Earth`s rotation for launch.'
    },
    {
        id: 'SPACE CAPSULE',
        url: spaceCapsule,
        text: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth`s atmosphere without wings. Our capsule is where you`ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    }
]