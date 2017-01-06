import React from 'react';
import { getFunName } from '../helpers.js';


class StorePicker extends React.Component{

	/*render(){

		return React.createElement( 'p', { className: 'Testing' }, 'I love you' );

	}*/


	goToStore( e ) {

		e.preventDefault();
		console.log( 'You Changed the URl' );

		// first grab the text from the box
		
		const storeId = this.storeInput.value
		console.log( `Going to ${storeId}` );

		this.context.router.transitionTo( `/store/${storeId}` );

		// second we're going to transition from / to / store / :storeId
		


	}


	render() {

		return (

			<form className="store-selector" onSubmit = { (e) => this.goToStore(e) }>
				{ /* comment */ }

				<h2>Please Enter A Store</h2>

				<input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref = { ( input ) => { this.storeInput = input } } />

				<button type="submit">Visit store</button>

			</form>
		)


	}

}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}



export default StorePicker;