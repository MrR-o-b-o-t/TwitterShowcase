import React, { useState } from 'react';

const SearchPage = () => {
    const [twitterHandle, setTwitterHandle] = useState('');

    const handleInputChange = (event) => {
        setTwitterHandle(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log('Twitter Handle:', twitterHandle);
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
        </div>
    );
};

export default SearchPage;
