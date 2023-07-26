import React, { useState } from 'react';

const SearchPage = () => {
    const [twitterHandle, setTwitterHandle] = useState('');
    const [tweets, setTweets] = useState([]);

    const handleInputChange = (e) => {
        setTwitterHandle(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/tweets/${twitterHandle}`);
            if (response.ok) {
                const data = await response.json();
                setTweets(data.data);
            } else {
                console.error('Failed to fetch tweets:', response.statusText);
            }
        } catch (err) {
            console.error('An error occurred while fetching tweets:', err);
        }
    };

    return (
        <div className="container mt-5">
            <header className="text-center">
                <h1>Search Twitter</h1>
            </header>
            <section className="mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                        <form onSubmit={handleFormSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Twitter Handle"
                                    value={twitterHandle}
                                    onChange={handleInputChange}
                                />
                                <button className="btn btn-primary" type="submit">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div>
                {tweets.map((tweet) => (
                    <div key={tweet.id}>
                        <p>Name: {tweet.name}</p>
                        <p>Username: {tweet.username}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
