import React, { Component } from 'react';

export default class RecipeDetails extends Component {

    render() {

        const {
            recipes,
            id
        } = this.props;

        const { handleIndex } = this.props;

        let current = "";
        let ingredients = [];

        recipes.map(recipe => {
            if (recipe.uri === id) {
                current = recipe;
                ingredients = current.ingredients;
            }
        });

        return (

            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button"
                            className="btn btn-warning mb-5 text-capitalize"
                            onClick={() => handleIndex(1)}>
                                back to recipe list
                            </button>
                            <img src={ current.image} alt="recipe"
                            className="d-block w-100" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">
                                { current.label }
                            </h6>
                            <h6 className="text-warning text-capitalize
                            text-slanted">
                                provided by { current.source }
                            </h6>
                            <a href={ current.shareAs }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-2 text-capitalize">
                                publisher webpage
                            </a>
                            <a href={ current.url }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mt-2 mx-3
                            text-capitalize">
                                recipe url
                            </a>
                            <ul className="list-group mt-4"></ul>
                            <h2 className="mt-3 mb-4">Ingredients</h2>
                            {
                                ingredients.map((ingredient, index) => {
                                    return (
                                        <li key={ index }
                                        className="list-group-item
                                        text-slanted">
                                            { ingredient.text }
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
