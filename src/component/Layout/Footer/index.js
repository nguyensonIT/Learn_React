const Footer = () => {
    return (
        <div className="footer">
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-google"></i>
                        </a>

                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </section>

                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Đăng ký</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="form5Example21"
                                            className="form-control"
                                            placeholder="Nhập Email"
                                        />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-light mb-4"
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023 - Footer content goes here
                    <a className="text-white" href="https://example.com/">
                        YourWebsite.com
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
