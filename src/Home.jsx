import { Grid, Grow, Typography } from "@material-ui/core";
import React from "react";
import { HashLink } from "react-router-hash-link";
import myPhoto from "./images/linkedinimage.jpg";
import DannyHuang_CV from "./DannyHuang_CV.pdf";

export default function Home(props) {
	return (
		<section class={"intro"}>
			<Grid container justifyContent="space-between" spacing={1}>
				<Grid item xs={8}>
					<Typography variant="h3">
						Welcome to my personal website
					</Typography>
					<br />
					<Typography>
						Hi I'm Danny - Junior Cloud (Software) Engineer -
						currently working at National Australia Bank (NAB) and
						welcome to my personal website. <br /> <br />
						I'm currently building the website out, so a couple of links
						are coming soon, but stay tuned!  <br /> <br />
						Navigate below to learn more
						{/* I'm currently building this out, so a couple of links
						are coming soon, but stay tuned! <br />
						The website you are viewing is currently written in
						ReactJS framework deployed on AWS Elastic Container
						Service(ECS) with docker and Nginx. */}
					</Typography>

					<Grid container>
						<Grid item xs={6}>
							<ul>
								<li>
									<HashLink
										smooth
										to="#aboutMe"
										style={{
											textDecoration: "none",
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
											textDecoration: "none",
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
											textDecoration: "none",
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
											textDecoration: "none",
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
											textDecoration: "none",
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
											textDecoration: "none",
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
											textDecoration: "none",
											color: "white",
										}}
									>
										Medium
									</a>
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
				</Grid>
			</Grid>
		</section>
	);
}
