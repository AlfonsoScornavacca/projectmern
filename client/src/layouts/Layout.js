import Footer from "../components/Footer";
import Navegation from "../components/Navegation";

export default function Layout({children}) {
    return (
        <div>
            <Navegation />
            {children}
            <Footer />
        </div>
    )
}
