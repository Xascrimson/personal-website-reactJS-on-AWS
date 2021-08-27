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
import cloud_prac from "./cloud_prac.png";
import SAA from "./SAA.png";



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
										<WritingArea raised ={true}>
											<div>
											Hello I'm Danny a Junior Cloud (Software) Engineer working at National Australia Bank and welcome to my personal website. <br/> <br/>
											 I'm currently building this out, so a couple of links are coming soon, but stay tuned! <br/>
											The website you are viewing is currently written in ReactJS framework deployed on AWS Elastic Container Service(ECS) with docker and Nginx.<br/>
											Routing is done using react-router to navigate between components.<br/>
											Animiation utilises framer-motion package.<br/>
											<img
												src={SAA}
												className="SAA"
												width="30%"
											/>
											<img
												src={cloud_prac}
												className="cloud_prac"
												width="30%"
											/>
											</div>
											 </WritingArea>

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
