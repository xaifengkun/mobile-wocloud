'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var arr = [1, 2, 3];
var bad = arr.map(function (num) {
  return num * 2;
});
var obj = { name: 'hello word' };
var obj1 = { title: 'name' };
var obj2 = _extends({}, obj1, obj2);
console.log(bad);
class App extends React.Comporent{
	
	constructor (props) {
		
		super (props)

	}

	render () {

		return (

			<div className="container">
				<h1> hello React</h1>
			</div>
		)
	}
}