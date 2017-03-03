import React from 'react';

class StorePicker extends React.Component{
	render() {
		// 這邊可以用一般的註解
		return (
			<form className="store-selector">
				{ /* return 裡密的註解要這要用 */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store -></button>
			</form>
		)
	}	
}

export default StorePicker;