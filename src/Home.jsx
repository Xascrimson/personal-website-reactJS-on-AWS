import { Grid, Grow, Typography } from "@material-ui/core";
import React from "react";
import { HashLink } from "react-router-hash-link";
import ContactMe from "./ContactMe";
import DannyHuang_CV from "./DannyHuang_CV.pdf";
import cloud_prac from "./images/cloud_prac.png";
import myPhoto from "./images/linkedinimage.jpg";
import ML from "./images/ML.png";
import SAA from "./images/SAA.png";
export default function Home(props) {
	return (
		<section class={"intro"} id="intro">
			<Grid container justifyContent="space-between" spacing={1}>
				<Grid item xs={8}>
					<Typography variant="h3">
						Welcome to my personal website
					</Typography>
					<br />
					<Typography>
						Hi I'm Danny - Associate Cloud (Software) Engineer (Mid-level) -
						currently working at National Australia Bank (NAB) and
						welcome to my personal website. <br /> <br />
						I'm currently building the website out, so a couple of
						links are coming soon, but stay tuned! <br /> <br />
						Navigate below the links to learn more
					</Typography>

					<Grid container>
						<Grid item xs={6}>
							<ul>
								<li>
									<HashLink
										smooth
										to="#aboutMe"
										style={{
											color: "white",
										}}
									>
										About Me
									</HashLink>
								</li>
								<br />
								<li>
									<a
										href={DannyHuang_CV}
										download="Danny Huang CV.pdf"
										style={{
											color: "white",
										}}
									>
										Resume
									</a>
								</li>
								<br />
								<li>
									<HashLink
										smooth
										to="#websiteArchitecture"
										style={{
											color: "white",
										}}
									>
										Website Architecture
									</HashLink>
								</li>
								<br />
								<li>
									<HashLink
										smooth
										to="#stock"
										style={{
											color: "white",
										}}
									>
										Algorithmic Trading Stock Portfolio
									</HashLink>
								</li>
							</ul>
						</Grid>
						<Grid item xs={6}>
							<ul>
								<li>
									<a
										href="https://github.com/xascrimson"
										style={{
											color: "white",
										}}
									>
										Github
									</a>
								</li>
								<br />
								<li>
									<a
										href="https://www.linkedin.com/in/danny-huang-471220159/"
										style={{
											color: "white",
										}}
									>
										Linkedin
									</a>
								</li>
								<br />
								<li>
									<a
										href="https://medium.com/@dannyhuangNZ"
										style={{
											color: "white",
										}}
									>
										Medium
									</a>
								</li>
								<br />
								<li>
									<ContactMe />
								</li>
							</ul>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<Grow
						in={true}
						style={{ transformOrigin: "1 2 1" }}
						timeout={2000}
					>
						<img src={myPhoto} class={"myPhoto"} width="100%" />
					</Grow>
					<img src={ML} className="ML" width="30%" />
					<img src={SAA} className="SAA" width="30%" />
					<img src={cloud_prac} className="cloud_prac" width="30%" />
				</Grid>
			</Grid>
		</section>
	);
}
