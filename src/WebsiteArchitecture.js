import { Grid, Typography } from "@material-ui/core";
import ALB from "./images/AWS-ALB-overview.png";
import Amplify from "./images/Amplify.png";
import { Figure } from "react-bootstrap";
export default function WebsiteArchitecture(props) {
	return (
		<section class="red">
			<Grid container>
				<Grid item xs={12}>
					<Grid container justifyContent="center">
						<Typography variant="h3">
							Website Architecture
						</Typography>
					</Grid>
					<br />
					<Grid item xs={12}>
						<Grid Container>
							<Typography>
								The website is built in a React framework.
							</Typography>
							<Typography>
								Packages used:
								<ul>
									<li>Material UI: React UI library</li>
									<li>
										React-Router-Hash-Link: for
										scrollability between sections
									</li>
								</ul>
							</Typography>
							<br />
							<Typography>
								Initially the website architecture was
								containerised with Docker and hosted on AWS
								Elastic Container Service (ECS) with an
								Application Load balancer (ALB) in front to
								serve users. Fargate was used for scalability
								and docker image was stored on Elastic Container
								Registry. This solution however, became an
								unfeasible option as the load balancer cost $25
								per month for such low traffic.
							</Typography>
							<br />
							<Typography>
								Instead, I went via an alternative solution,
								using AWS Amplify to handle all CI/CD
								deployment. The benefits of Amplify is that it
								significantly reduces deployment time. Rather
								than deployment via traditional route of S3 +
								Cloudfront, Amplify automatically pulls from
								repo, builds, and deploy the website, making
								Amplify a quick service to deploy an MVP.
							</Typography>
							<br />
							<Typography>
								We use Route 53 for DNS service for easier
								access for customers. This essentially maps for
								example,192.168.0.1 to www.dannyhuangnz.com for
								readability.
							</Typography>
							<Grid container>
								<Grid item xs={5}>
									<Figure>
										<Figure.Image src={ALB} width="80%" />
										<Figure.Caption>
											ECS Solution Architecture
										</Figure.Caption>
									</Figure>
								</Grid>
								<Grid item xs={7}>
									<Figure>
										<Figure.Image
											src={Amplify}
											width="90%"
										/>
										<Figure.Caption>
											Amplify Architecture
										</Figure.Caption>
									</Figure>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}
