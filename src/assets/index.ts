import logo from './images/logo.svg';
import retro1 from './images/retro_1.png';
import retro2 from './images/retro_2.png';
import ufo from './images/ufo.png';
import cloud from './images/cloud.jpg';

interface IImageProps {
    [key: string]: string;
}

const images: IImageProps = {
    logo,
    retro1,
    retro2,
    ufo,
    cloud
};

export default images;
