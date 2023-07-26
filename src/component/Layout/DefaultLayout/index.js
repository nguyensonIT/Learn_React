import Footer from "../Footer";
import Header from "../Header";

const DefaultLayout = ({ children }) => {
    return (
        <div className="container-app">
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
