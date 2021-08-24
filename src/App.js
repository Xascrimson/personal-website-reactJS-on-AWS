import {
	Container,
	createTheme,
	Divider,
	Grid,
	Grow,
	ThemeProvider,
	Toolbar,
	Typography,
	IconButton,
	Box,
} from "@material-ui/core";
import { GitHub, Info, ShowChart } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import myPhoto from "./linkedinimage.jpg";
import { AppBar,WritingArea } from "./styles";
import About from "./about";
import { Card} from '@material-ui/core';


export default function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#3f51b5",
				light: "#757de8",
				dark: "#002984",
				contrastText: "#fff",
			},
			secondary: {
				main: "#2196f3",
				light: "#6ec6ff",
				dark: "#0069c0",
				contrastText: "#fff",
			},
		},
	});

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div class="diagonal-box">
					<div class="content">
						<AppBar position="dynamic">
							<Box
								display="flex"
								justifyContent="flex-end"
								paddingRight="12%"
							>
								<Toolbar>
									<IconButton color="inherit" href="/">
										<HomeIcon />
									</IconButton>
									<IconButton
										color="inherit"
										href="https://github.com/xascrimson"
									>
										<GitHub />
									</IconButton>
									<IconButton
										color="inherit"
										href="/Portfolio"
									>
										<ShowChart />
									</IconButton>

									<IconButton color="inherit">
										<Info />
									</IconButton>
								</Toolbar>
							</Box>
						</AppBar>

						<br />
						<Container maxWidth="xlg">
							<Grid container>
								<Grid container xs={4}>
									<Grid item sm={9}>
										<Grow
											in={true}
											style={{ transformOrigin: "1 2 1" }}
											timeout={2000}
										>
											<img
												src={myPhoto}
												className="myPhoto"
												width="80%"
											/>
										</Grow>
										<br />
										<WritingArea raised ={true}> Hello and welcome to my personal website</WritingArea>
									</Grid>
									<Grid item sm={1}>
										<Divider
											orientation="vertical"
											variant="middle"
										/>
									</Grid>
								</Grid>

								<Switch>
									<Route path="/about">
										<About />
									</Route>
									<Route path="/Portfolio">
										<Users />
									</Route>

									<Route path="/Danny">
										<Danny />
									</Route>

									<Route path="/">
										<Home />
									</Route>
								</Switch>
							</Grid>
						</Container>
					</div>
				</div>
			</ThemeProvider>
		</Router>
	);
}

function Users() {
	return <h2>Users</h2>;
}

function Danny() {
	return <h2> hello danny</h2>;
}
