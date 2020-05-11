import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.4,
	cheese: 1.3,
	meat: 4,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 0,
		purchasable: false,
	}

	addIngredientHandler = (type) => {
		// Remember state must be modified in an IMMUTABLE way. Do NOT directly modify state!
		// So use spread operator to get a copy of the state object.
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = this.state.ingredients[type] + 1;
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
			purchasable: true,
		});
	}

	removeIngredientHandler = (type) => {
		// Remember state must be modified in an IMMUTABLE way. Do NOT directly modify state!
		// So use spread operator to get a copy of the state object.
		if (this.state.ingredients[type] > 0)
		{
			const updatedIngredients = {...this.state.ingredients};
			updatedIngredients[type] = this.state.ingredients[type] - 1;
			const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
			this.setState({
				ingredients: updatedIngredients,
				totalPrice: Math.abs(newPrice), // Avoid signed 0
				purchasable: newPrice > 0.0001, // Don't use zero to overcome FP comparison probs
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls
					onAdd={this.addIngredientHandler}
					onRemove={this.removeIngredientHandler}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;