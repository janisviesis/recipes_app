import React, { Component } from 'react'

export default class Recipe extends Component {

    render() {

        const {
            image,
            label,
            url,
            source
        } = this.props.recipe;

        const { handleDetails } = this.props;
        
        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={ image } alt="recipe"
                        className="img-card-top"
                        style={{ height: "14rem" }}/>
                        <div className="card-body text-capitalize">
                            <h6>
                                { label.length < 20 ? `${label}` :
                                `${label.substring(0, 25)}...` }
                            </h6>
                            <h6 className="text-warning text-slanted">
                                provided by { source }
                            </h6>
                        </div>
                        <div className="card-footer">
                            <button type="button"
                            className="btn btn-primary text-capitalize"
                            onClick={ handleDetails }>
                                details
                            </button>
                            <a href={ url }
                            className="btn btn-success mx-2 text-capitalize"
                            target="_blank"
                            rel="noopener noreferrer">
                                recipe url
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
