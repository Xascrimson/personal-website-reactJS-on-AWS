import {
	Button,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Card, Title } from "./styles";
import { motion, MotionConfig } from "framer-motion";

// const CardColor = styled.Card`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export default function Home(props) {
	// const classes = useStyles();
	// const { posts, title } = props;

	return (
		<Grid container xs={8}>
			<Grid container justifyContent="space-around">
				<Grid item>
					<motion.div
						animate={{
							scale: [1, 1.2, 1, 1, 1, 1, 1, 1],
							opacity: [0, 0, 1, 1, 1, 1, 1, 1],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [1],
						}}
					>
						<Card raised={true}>
							<CardContent>
								<Title color="textSecondary" gutterBottom>
									Resume
								</Title>
								<Typography variant="h6">
									My current resume as of 24/08/2021
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Download</Button>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>

				<Grid item>
					<motion.div
						animate={{
							scale: [1, 1, 1.2, 1, 1, 1, 1, 1],
							opacity: [0, 0, 0, 1, 1, 1, 1, 1],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [1],
						}}
					>
						<Card raised={true}>
							<CardContent>
								<Title color="textSecondary" gutterBottom>
									Algorithmic Trading Stock Portfolio
								</Title>
								<Typography variant="h6">
									Discussions on market neutral strategies
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>
			</Grid>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Grid container justifyContent="space-around">
				<Grid item>
					<motion.div
						animate={{
							scale: [1, 1, 1, 1.2, 1, 1, 1, 1],
							opacity: [0, 0, 0, 0, 1, 1, 1, 1],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [1],
						}}
					>
						<Card raised={true}>
							<CardContent>
								<Title color="textSecondary" gutterBottom>
									Medium Articles
								</Title>
								<Typography variant="h6">
									Here lies all medium articles from my side
									projects
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									href="https://medium.com/@dannyhuangNZ"
								>
									Take me over
								</Button>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>

				<Grid item>
					<motion.div
						animate={{
							scale: [1, 1.2, 1, 1, 1.2, 1, 1, 1],
							opacity: [0, 0, 0, 0, 0, 1, 1, 1],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [1],
						}}
					>
						<Card raised={true}>
							<CardContent>
								<Title color="textSecondary" gutterBottom>
									Github
								</Title>
								<Typography variant="h6">
									Where all my personal github projects lies
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									href="https://github.com/xascrimson"
								>
									Take me over
								</Button>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>
			</Grid>

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Grid container justifyContent="space-around">
				<Grid item>
					<motion.div
						animate={{
							scale: [1, 1.2, 1, 1, 1, 1.2, 1, 1],
							opacity: [0, 0, 0, 0, 0, 0, 1, 1],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [1],
						}}
					>
						<Card raised={true}>
							<CardContent>
								<Title color="textSecondary" gutterBottom>
									About Me
								</Title>
								<Typography variant="h6">
									Quality discussions of my personal interests
									& professional life
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>
				<Grid item>
					<motion.div
						animate={{
							scale: [1, 1.2, 1, 1, 1, 1.2, 1.2, 1],
							opacity: [0, 0, 0, 0, 0, 0, 0, 1],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [1],
						}}
					>
						<Card raised={true}>
							<CardContent>
								<Title color="textSecondary" gutterBottom>
									Website Architecture
								</Title>
								<Typography variant="h6">
									Discussions on solution architecture for
									this ReactJS website deployed on ECS
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</motion.div>
				</Grid>
			</Grid>
		</Grid>
	);
}
