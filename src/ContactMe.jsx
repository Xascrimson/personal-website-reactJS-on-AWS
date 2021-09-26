import { Dialog, DialogTitle, List, ListItem } from "@material-ui/core";
import { Email, Phone } from "@material-ui/icons";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React, { useState } from "react";


export function ContactInfo({ open, onClose }) {
	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>Contact Details</DialogTitle>
			<List sx={{ pt: 20 }}>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<Email />
						</ListItemIcon>
						dannyhuang1234@gmail.com
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<Phone />
						</ListItemIcon>
						+61 452504531
					</ListItemButton>
				</ListItem>
                
			</List>
		</Dialog>
	);
}

export default function ContactMe(Props) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<a
				style={{
					"text-decoration": "underline",
					color: "white",
				}}
				href="javascript:void(0)"
				onClick={handleClickOpen}
			>
				Contact Me
			</a>

			<ContactInfo open={open} onClose={handleClose} />
		</>
	);
}
