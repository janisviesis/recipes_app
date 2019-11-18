import React, { Component } from 'react';
import './App.css';

import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

export default class App extends Component {

    state = {
        recipes: [],
        APP_ID: 'app_id=67a610ea',
        APP_KEY: '&app_key=803b12cd9441264e4961e71a45f2a877',
        url: 'https://api.edamam.com/search?app_id=67a610ea&app_key=803b12cd9441264e4961e71a45f2a877&q=top',
        base_url: "https://api.edamam.com/search?",
        details_id: '',
        pageIndex: 1,
        search: "",
        query: '&q=',
        error: ''
    };

    async getRecipes() {

        try {

            const datas = [];
            const data = await fetch(this.state.url);
            const jsonData = await data.json();

            if (jsonData.hits.length === 0) {

                this.setState(() => {
                    return {error:
                        'sorry, but your search did not returned any results'
                    }
                });

                setTimeout(() => {
                    this.setState({
                        error: ''
                    });
                }, 3000);

            } else {

                jsonData.hits.forEach((data) => {
                    datas.push(data.recipe);
                });

                this.setState({
                    recipes: datas
                });
            }
        } catch (error) {
            console.log(error);
        }   
    }

    
    componentDidMount() {
        this.getRecipes();
    };

    displayPage = (index) => {

        switch(index) {
            default:
            case 1:
                return <RecipeList
                recipes={this.state.recipes}
                handleDetails={this.handleDetails}
                value={this.state.search}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                error={this.state.error} />;
            case 0:
                return <RecipeDetails
                id={this.state.details_id}
                recipes={this.state.recipes}
                handleIndex={this.handleIndex} />;
        }
    };

    handleIndex = index => {

        this.setState({
            pageIndex: index
        });
    };

    handleDetails = (index, id) => {
        
        this.setState({
            pageIndex: index,
            details_id: id
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        
        const { base_url, APP_ID, APP_KEY, query, search} = this.state;

        this.setState(() => {
            return {
                url:`${base_url}${APP_ID}${APP_KEY}${query}${search}`,
                search:""
            };
        }, () => {
            this.getRecipes();
        });
    };

    render() {
        
        return (
            <React.Fragment>
                { this.displayPage(this.state.pageIndex)}
            </React.Fragment>
        )
    };
};
