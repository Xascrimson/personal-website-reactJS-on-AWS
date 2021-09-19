import { Grid, Typography } from "@material-ui/core";

export default function About(props) {
	return (
		<section class="deepBlue">
			<Grid container>
				<Grid item xs={12}>
					<Grid container justifyContent="center">
						<Typography variant="h3">About Me</Typography>
					</Grid>
					<br />
					<Grid item xs={12}>
						<Grid Container>
							<Typography>
								First off, thanks for visiting my website!
							</Typography>
							<br />
							<Typography>
								I'm a New Zealand Citizen working in Australia
								that enjoys travelling and working overseas to
								embrace local culture. I've studied abroad at
								UCLA for 1 year where it was a unforgettable
								experience. If I have the chance to move
								overseas I would take the chance.
							</Typography>
							<br />
							<Typography>
								I'm an Electrical Engineer turned Software
								Engineer working as a Full-stack developer for
								client-facing applications at National Australia
								Bank (NAB).
							</Typography>
							<Typography>
								I have brought 3 applications from scratch to
								production that is used by both external
								customers and all bank branches.
							</Typography>
							<Typography>
								Competed in Internal Hackathon for housing price
								evaluation model, in which we used a
								Convolutional Neural Network (CNN) for pricing
								model.
							</Typography>
							<Typography>
								In this role, I work both as a Frontend engineer
								(ReactJS) and DevOps in which I build the
								applications as well as setting up the
								production environment infrastructure.
							</Typography>
							<Typography>
								This requires me to be well-versed with CI/CD
								Jenkins and AWS services such as EC2, ECS, KMS,
								RDS, DynamoDB.
							</Typography>
							<Typography>
								As an Associate Engineer, I held senior
								responsibilities as a Tech Lead and mentored
								colleagues from DXC and Accenture. This also
								required me to communicate with various teams
								such as Security and Microservices API product
								owners to ensure we are able to meet production
								deadline.
							</Typography>
							<br />
							<Typography>
								Outside of work, I taught a workshop on
								cybersecurity using AWS cognito to protect
								unauthenticated users accessing secured
								resources.
							</Typography>
							<Typography>
								Workshop Tutorial link:{' '}  
								<a
									href="https://main.dibepxnxsqwel.amplifyapp.com/"
									style={{
										color: "white",
									}}
								>
									https://main.dibepxnxsqwel.amplifyapp.com/
								</a>
							</Typography>
							<br />
							<Typography>
								I graduated as an Electrical Engineer
								specialising in Machine Learning and Controls
								from The University of Melbourne, where I
								completed both my Bachelors and Masters of
								Engineering.
							</Typography>
							<br />
							<Typography>
								From my final year Masters Capstone my team of
								three was awarded 2 awards for our capstone
								achievements. ( / 182 teams)
								<ul>
									<li>2nd place People’s Choice Award.</li>
									<li>3rd place Road to Endeavour Award.</li>
								</ul>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}
