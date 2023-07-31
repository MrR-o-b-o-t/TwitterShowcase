import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const TweetCard = ({ tweets }) => {
    return (
        <Row xs={1} md={1} lg={1} className="g-4">
            {tweets.map((tweet) => (
                <Col key={tweet.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{tweet.id}</Card.Title>
                            <Card.Text>{tweet.text}</Card.Text>
                            <Card.Link href="#">{tweet.public_metrics.like_count}</Card.Link>
                            <Card.Link href="#">{tweet.public_metrics.retweet_count}</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default TweetCard;
