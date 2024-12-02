import logo from './images/logo.svg';
import retro1 from './images/retro_1.png';
import retro2 from './images/retro_2.png';
import ufo from './images/ufo.png';

interface IImageProps {
    [key: string]: string;
}

const images: IImageProps = {
    logo,
    retro1,
    retro2,
    ufo,
};

export default images;
