import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	Grid,
} from "@mui/material";
import { capitalizeTitle } from "../utils/utils";
import { styled, useTheme } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";
import React, { memo } from "react";
import { formDataType } from "../models/formDataTypes";

const TextField = styled(MuiTextField)({
	"& .MuiFormHelperText-root": {
		width: "222px", // Set the desired width
	},
});
interface forminputsType {
	inputs: string[];
	colNum: number;
	onInputChange: (currentTarget: HTMLInputElement) => void;
	onCheckboxChange: (currentTarget: HTMLSpanElement) => void;
	errors: formDataType;
	data: formDataType;
}

const FormInputs = ({
	inputs,
	colNum,
	onInputChange,
	onCheckboxChange,
	errors,
	data,
}: forminputsType) => {
	return (
		<>
			{inputs &&
				colNum === 1 &&
				inputs.map((input, index) =>
					Input(
						input,
						onInputChange,
						onCheckboxChange,
						errors,
						index,
						"center",
						data,
					),
				)}
			{inputs && colNum === 2 && (
				<>
					<Grid item md={5} xs={12}>
						<Box
							sx={{
								display: "flex",
								gap: 2,
								flexDirection: "column",
							}}
						>
							{inputs
								.slice(0, Math.ceil(inputs.length / 2))
								.map((input, index) =>
									Input(
										input,
										onInputChange,
										onCheckboxChange,
										errors,
										index,
										"flex-end",
										data,
									),
								)}
						</Box>
					</Grid>
					<Grid item md={5} xs={12}>
						<Box
							sx={{
								display: "flex",
								gap: 2,
								flexDirection: "column",
							}}
						>
							{inputs
								.slice(Math.ceil(inputs.length / 2), inputs.length)
								.map((input, index) =>
									Input(
										input,
										onInputChange,
										onCheckboxChange,
										errors,
										index,
										"flex-start",
										data,
									),
								)}
						</Box>
					</Grid>
				</>
			)}
		</>
	);
};
const Input = (
	input: string,
	onInputChange: (currentTarget: HTMLInputElement) => void,
	onCheckboxChange: (currentTarget: HTMLSpanElement) => void,
	errors: formDataType,
	index: number,
	justify: string,
	data: formDataType,
) => {
	const {
		palette: { mode: themeMode },
	} = useTheme();
	let inputType = "text";
	let inputName: keyof formDataType = input as keyof formDataType;
	if (input.includes("Pass")) {
		inputType = "password";
	}
	if (input.includes("Bool")) inputType = "checkbox";
	const required = input.includes("*");
	if (input.indexOf("(") !== -1)
		inputName = input.substring(0, input.indexOf("(")) as keyof typeof data;
	const value = data?.[inputName];
	return (
		<Grid
			item
			xs={12}
			className="flex"
			sx={{ justifyContent: { xs: "center", md: justify } }}
			key={index}
		>
			<FormControl sx={{ minWidth: 250 }}>
				{inputType === "checkbox" ? (
					// TODO: Fix checkbox
					<FormControlLabel
						control={
							<Checkbox
								onClick={(e) => onCheckboxChange(e.currentTarget)}
								id={inputName}
								name={inputName}
								checked={Boolean(value)}
							/>
						}
						label={capitalizeTitle(inputName)}
						required={required}
						style={{ color: themeMode === "dark" ? "#fff" : "#121212" }}
					/>
				) : (
					<TextField
						value={value}
						required={required}
						type={inputType}
						id={inputName}
						name={inputName}
						label={capitalizeTitle(inputName)}
						onChange={(e) => onInputChange(e.currentTarget as HTMLInputElement)}
						error={Boolean(errors[inputName])}
						autoComplete="off"
						helperText={errors[inputName]}
						fullWidth
					/>
				)}
			</FormControl>
		</Grid>
	);
};

export default memo(FormInputs);
