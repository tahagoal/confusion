import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };

        console.log('Menu Component Constructor is invoked');

    }

    componentDidMount() {
    }

    renderComments(comments) {
        if (comments.length > 0) {
            return comments.map((comment) => {
                if (comment != null) {
                    return (

                        <div>
                            <p>
                                {comment.comment}
                            </p>
                            <p>
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    )
                }
                else {
                    return (
                        <div></div>
                    )
                }
            })
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


    render() {
        const dish = this.props.dish;
        return this.renderDish(dish);
    }
}

export default DishDetail;