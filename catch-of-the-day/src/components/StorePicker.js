import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }
	goToStore(e) {
		e.preventDefault();
		console.log('You changed the URL');
		// first grab the text from the box
		// const value = $('input').val();
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// second we're going to transition from / to / store / :storeId
		// 網址指向位址
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		// 這邊可以用一般的註解
		return (
			<div>
				<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
					{ /* return 裡面的註解要這要用 */ }
					<h2>Please Enter A Store</h2>
					<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
					<button type="submit">Visit Store -></button>
				</form>
			</div>	
		)
	}	
}
// 產生 StorePicker 的 contextTypes, 幫助指向新的頁面
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;