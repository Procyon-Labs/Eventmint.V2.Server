"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import TicketComponent from "@/component/ticketComponent";
import Picture from "@/component/svgs/picture";
import Upload from "@/component/svgs/Upload";

export default function Page() {
  const CustomOutlinedInput = styled(OutlinedInput)(() => ({
    "& .MuiOutlinedInput-root": {},
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: 16,
      borderColor: "#4B5768",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00D300",
      // Change to your desired color
    },
  }));

  const CustomInputLabel = styled(InputLabel)(() => ({
    fontSize: "1rem",
    color: "#64748B",
    transform: "translate(14px, 14px) scale(1)",
    "&.Mui-focused": {
      color: "#64748B",
      fontSize: "1rem",
      transform: "translate(14px, -6px) scale(0.75)",
      padding: "0rem", // Change the label color when focused
    },
  }));

  const CustomTextField = styled(TextField)(({ theme }) => ({
    // Normal state styles
    "& .MuiInputLabel-root": {
      color: "#4B5768", // Label color in normal state
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4B5768", // Input border color in normal state
        borderRadius: "16px", // Border radius
      },
      "&:hover fieldset": {
        borderColor: "#64748B", // Input border color on hover
      },
    },
    // Focused state styles
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#00D300", // Label color in focused state
    },
    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
      borderColor: "#00D300", // Input border color in focused state
    },
    "& .MuiOutlinedInput-input": {
      color: "#E0FFE0", // Text color for typed input
    },
  }));
  const [age, setAge] = useState<string>("");

  return (
    <div className="px-[32px] w-full">
      <div className="w-full flex gap-[48px]">
        <div className="w-1/2 flex flex-col gap-y-[32px]">
          <Box>
            <CustomTextField
              id="outlined-basic"
              label={"Ticket Name"}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <CustomTextField
              id="Ticket Description"
              label="Ticket Description"
              multiline
              rows={4}
              defaultValue="Ticket Description"
              fullWidth
            />
          </Box>
          <Box>
            <FormControl fullWidth>
              <CustomInputLabel id="Select Category">
                Select Category
              </CustomInputLabel>
              <Select
                labelId="Select Category"
                id=" Select Category"
                value={age}
                input={<CustomOutlinedInput label="Men" />}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              >
                <MenuItem value={"Men"}>Men</MenuItem>
                <MenuItem value={"Women"}>Women</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <CustomTextField
              id="Enter Amount (SOL)"
              label="Enter Amount (SOL)"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <CustomTextField
              id="Quantity"
              label="Quantity"
              variant="outlined"
              fullWidth
            />
          </Box>
        </div>
        <div className="w-1/2 flex flex-col gap-y-[32px]">
          <TicketComponent
           first="Ticket Image"
            second="Drag and drop your image here to upload"
             third="Supports JPG, JPEG, PNG"
              fourth="Max. upload size 2MB" 
              labelButton='Upload'
              icon={<Picture/>} />
              
              <TicketComponent
           first="Ticket File"
            second="Drag and drop your file here to upload"
             third="Supports JPG, JPEG, PNG"
              fourth="Max. upload size 2MB" 
              labelButton='Upload'
              icon={<Upload/>} />
        </div>
      </div>
    </div>
  );
}
