import React from 'react';
import { getFunName } from '../helpers.js';


class StorePicker extends React.Component{

	/*render(){

		return React.createElement( 'p', { className: 'Testing' }, 'I love you' );

	}*/

	render() {

		return (

			<form className="store-selector">
				{ /* comment */ }

				<h2>Please Enter A Store</h2>

				<input type="text" required placeholder="Store Name" defaultValue={ getFunName() } />

				<button type="submit">Visit store</button>

			</form>
		)


	}


}

export default StorePicker;