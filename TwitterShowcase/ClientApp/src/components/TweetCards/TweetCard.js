import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './TweetCard.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';

const TweetCard = ({ tweets, includes, userHandleInput }) => {
    return (
        <Row className="" xs={1} md={1} lg={1} className="g-3">
            {tweets.map((tweet) => (
                <Col key={tweet.id}>
                    <Card style={{ width: '40rem' }}>
                        <Card.Body className="tweet-cards">
                            <Card.Title>@{userHandleInput}</Card.Title>
                            <Card.Text>{tweet.text}</Card.Text>
                            <i className="material-icons"></i>
                        </Card.Body>
                        {tweet.attachments && tweet.attachments.media_keys && tweet.attachments.media_keys.length > 0 && (
                            <Card.Footer>
                                <Card.Img className="tweet-card-image" variant="bottom" src={includes.media.find((media) => media.media_key === tweet.attachments.media_keys[0]).url} />
                            </Card.Footer>
                        )}
                        <div className="d-flex"                        >
                            <div className="d-flex like-container">
                                <FaRegHeart className="mx-2 mt-1" />
                                <p>{tweet.public_metrics.like_count}</p>
                            </div>
                            <div className="d-flex retweet-container">
                                <FaRetweet className="mx-2 mt-1" />
                                <p href="#">{tweet.public_metrics.retweet_count}</p>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default TweetCard;
