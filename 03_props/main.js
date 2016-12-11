var Nav = React.createClass({

	render:function(){
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href={ this.props.linkUrl }>
							{ this.props.title }
						</a>
					</div>
				</div>
			</nav>
		);
	}

});

var Title = React.createClass({

	render: function() {
		return (
			<div className="container">
				<div className="row">
					<h1>{ this.props.title }</h1>
				</div>
			</div>
		);
	}

});

ReactDOM.render(
    < Nav title="Teste Props" linkUrl="index.html" />,
    document.getElementById('nav')
);

ReactDOM.render(
    < Title title="My component title!" />,
    document.getElementById('title')
);