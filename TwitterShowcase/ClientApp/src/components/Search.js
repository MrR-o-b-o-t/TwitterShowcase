import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TweetCard from './TweetCards/TweetCard';

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
        setTwitterHandle('');
    };

    return (
        <Container className="mt-5 fluid mb-5">
            <header className="text-center">
                <h1 className="text-3xl font-bold">Search Twitter</h1>
            </header>
            <section className="mt-4">
                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6}>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3 d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Twitter Handle"
                                    value={twitterHandle}
                                    onChange={handleInputChange}
                                    className="flex-grow-1 mr-2"
                                />
                                <Button className="mx-1" variant="primary" type="submit">
                                    Search
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </section>
            {tweets.length > 0 && <TweetCard tweets={tweets} />}
        </Container>
    );
};

export default SearchPage;
