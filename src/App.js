import React, { Nav } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";

import { AppBar, Toolbar,IconButton,Typography } from "@material-ui/core";
import {MenuIcon} from "@material-ui/icons";

export default function App() {
	return (
		<Router>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>

			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/users">
					<Users />
				</Route>

				<Route path="/Danny">
					<Danny />
				</Route>

				<Route path="/">
					<Blog />
				</Route>
			</Switch>
		</Router>
	);
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

function Danny() {
	return <h2> hello danny</h2>;
}
