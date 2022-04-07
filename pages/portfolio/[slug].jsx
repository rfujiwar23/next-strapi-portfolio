import Layout from "../../components/Layout";

const PortfolioItem = () => {
    return (
        <Layout>
            <div className="row">
                <div className="portfolio-image text-center mb-4">
                    <div className="col-md-12">
                        <img src="https://via.placeholder.com/1000x500"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="portfolio-content">
                    <div className="col-md-12">
                        <div className="portfolio-headline text-center m-2">
                            <h2>Project</h2>
                        </div>
                        <p>
                            This is Mine, yes.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PortfolioItem;