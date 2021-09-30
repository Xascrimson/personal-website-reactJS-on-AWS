import {
	Box,
	createTheme,
	IconButton,
	responsiveFontSizes,
	ThemeProvider,
	Toolbar,
} from "@material-ui/core";
import { GitHub, Info, ShowChart } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import About from "./about";
import { ContactInfo } from "./ContactMe";
import Home from "./Home";
import StockPortfolio from "./StockPortfolio";
import { AppBar } from "./styles";
import WebsiteArchitecture from "./WebsiteArchitecture";

export default function App() {
	let theme = createTheme({
		typography: {
			fontFamily: "Urbanist, sans-serif",

			body1: {
				fontSize: "20px",//"1.2rem",
			},
			h3: {
				fontFamily: "Permanent Marker, cursive",
			},
		},
		palette: {
			primary: {
				main: "#004162",
				light: "#336781",
				dark: "#002d44",
				contrastText: "#fff",
			},
			secondary: {
				main: "#0066FF",
				light: "#3384ff",
				dark: "#0047b2",
				contrastText: "#fff",
			},
		},
	});
	theme = responsiveFontSizes(theme);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div class="diagonal-box">
					<div class="content">
						<AppBar position="sticky" color="primary">
							<Box
								display="flex"
								justifyContent="flex-end"
								paddingRight="12%"
							>
								<Toolbar>
									<HashLink
										smooth
										to="#intro"
										style={{
											color: "white",
										}}
									>
										<IconButton color="inherit">
											<HomeIcon />
										</IconButton>
									</HashLink>
									<IconButton
										color="inherit"
										href="https://github.com/xascrimson"
									>
										<GitHub />
									</IconButton>
									<HashLink
										smooth
										to="#stock"
										style={{
											color: "white",
										}}
									>
										<IconButton color="inherit">
											<ShowChart />
										</IconButton>
									</HashLink>

									<IconButton color="inherit">
										<Info onClick={handleClickOpen} />
									</IconButton>
									<ContactInfo
										open={open}
										onClose={handleClose}
									/>
								</Toolbar>
							</Box>
						</AppBar>
						{/* https://app.haikei.app/ */}
						<Home />

						<div id="aboutMe" class="spacer layer1" />
						<About />

						<div id="websiteArchitecture" class="spacer layer2" />

						<WebsiteArchitecture />

						<div id="stock" class="spacer layer3" />

						<StockPortfolio />
					</div>
				</div>
			</ThemeProvider>
		</Router>
	);
}

