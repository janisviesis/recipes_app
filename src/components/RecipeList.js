import React, { Component } from 'react';

import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {

    render() {

        const {
            recipes,
            handleDetails,
            value,
            handleSubmit,
            handleChange,
            error
        } = this.props;

        return (
            <React.Fragment>
                <RecipeSearch
                value={value}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
                <div className="container my-5">
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 text-center
                            text-uppercase mb-3">
                                <h1 className="text-slanted">recipes list</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {error ? <h1 className="text-danger text-center rm">
                            {error}</h1> : recipes.map(recipe => {
                                return (
                                    <Recipe
                                        key= { recipe.uri }
                                        recipe = { recipe }
                                        handleDetails={() =>
                                            handleDetails(0, recipe.uri)}
                                    />
                                );
                            })}
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
