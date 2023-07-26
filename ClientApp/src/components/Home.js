import React from 'react';

const Home = () => {
    return (
        <div className="container mt-5">
            <header className="text-center">
                <h1>Twitter Showcase</h1>
            </header>
            <section className="mt-4">
                <div className="row">
                    <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                        <p className="lead text-center">
                            Twitter Showcase is a web application that allows you to retrieve and display the most recent tweets from
                            Twitter users. Search for any Twitter handle, and you'll instantly see their five most recent tweets!
                        </p>
                        <p className="lead text-center">
                            Stay up-to-date with your favorite Twitter accounts, discover new ones, and explore the latest tweets on
                            any topic of interest.
                        </p>
                        <p className="lead text-center">
                            Get started now by visiting the Search page, entering a Twitter handle in the search bar and experience the power of Twitter Showcase!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
