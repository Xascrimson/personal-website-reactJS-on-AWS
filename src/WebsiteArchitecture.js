import { Grid,Typography } from "@material-ui/core";
import ALB from "./images/AWS-ALB-overview.png";
export default function WebsiteArchitecture(props) {
	return (
		<section class='red'>
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
							Initially the website architecture was containerised with Docker and hosted 
							</Typography>
							<img src={ALB} width="30%"/>

						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}
