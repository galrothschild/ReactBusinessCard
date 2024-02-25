import { Container, Typography, Button, Grid } from "@mui/material";
import FormInputs from "./FormInputs";
import { memo } from "react";
import { useForm } from "../hooks/useForm";
import { RestartAlt } from "@mui/icons-material";
interface FormProps {
	title: string;
	inputs: string[];
	colNum: number;
	formActions: ReturnType<typeof useForm>;
}

const Form = ({ title, inputs, colNum, formActions }: FormProps) => {
	const {
		onSubmit,
		handleInputChange,
		handleCheckboxChange,
		errors,
		formError,
		data,
		handleReset,
	} = formActions;
	return (
		<Container className="flex flex-col items-center text-center">
			<Typography variant="h2" fontSize={32}>
				{title}
			</Typography>
			<Typography variant="h5" color="error">
				{formError}
			</Typography>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					onSubmit();
				}}
			>
				<Grid
					container
					spacing={1}
					direction="row"
					justifyContent="center"
					alignItems="start"
					alignContent="center"
					wrap="wrap"
					mt={2}
					gap={2}
				>
					<FormInputs
						inputs={inputs}
						colNum={colNum}
						onInputChange={handleInputChange}
						onCheckboxChange={handleCheckboxChange}
						errors={errors}
						data={data}
					/>
					<Grid item xs={12} className="flex justify-center">
						<Button
							color="primary"
							variant="contained"
							sx={{ px: 3, fontSize: 20, textTransform: "none" }}
							type="submit"
						>
							Submit
						</Button>
						<Button
							color="info"
							variant="contained"
							sx={{ px: 3, fontSize: 20, textTransform: "none" }}
							onClick={() => handleReset()}
						>
							<RestartAlt />
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default memo(Form);
