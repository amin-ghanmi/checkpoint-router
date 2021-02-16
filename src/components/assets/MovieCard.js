import React from 'react';
import { Card , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const MovieCard = ({ item ,Movies }) => {
    return (
        <div className="col-md-4 m-top 10px">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Movies.Poster} />
                <Card.Body>
                    <Card.Title>{Movies.Title}</Card.Title>
                    <Card.Text>
                        {Movies.Description}
                    </Card.Text>
                    <Card.Text className='gold'>
                        {"".padStart(Movies.Rate, '☆')}
                    </Card.Text>
                    <Link to={`/description/${Movies.Title}`}><Button variant="primary" className="but">Description</Button></Link>
                    <Button variant="danger">Delete</Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
