import Layout from "../components/Layout";


export default function Home() {
  const entries = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];
  return (
    <Layout>
      <div className="entries">
        <div className="row justify-content-start">
          {entries.map((entry) => (
            <div className="col-md-6">
              <div className="entry mb-3">
                <div className="main-image">
                  <img src="https://via.placeholder.com/600x400" className="img-fluid" />
                  <h2>{entry}</h2>
                  <p>
                    About
                    {' '}
                    {entry}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

