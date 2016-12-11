var Nav = React.createClass({
	render:function(){
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							React
						</a>
					</div>
				</div>
			</nav>
		);
	}
});

ReactDOM.render(
    < Nav />,
    document.getElementById('app')
);