import { useLocation } from "react-router-dom";
import Beranda from "../pages/Beranda";
import Faq from "../pages/FAQ";
import Tentang from "../pages/Tentang";



export default function () {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const firstParamKey = searchParams.keys().next().value;

    let content;
    switch (firstParamKey) {
        case 'faq':
            content = <Faq />;
            break;
        case 'tentang':
            content = <Tentang />;
            break;
        default:
            content = <Beranda />;
    }

    return content;
}