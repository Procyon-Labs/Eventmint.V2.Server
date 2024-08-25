"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import TicketComponent from "@/component/ticketComponent";
import Picture from "@/component/svgs/picture";
import { Button } from "@/component/button";
import ArrowRight from "@/component/svgs/arrowRight";
import { useDispatch } from "react-redux";
import { ticketAction } from "@/mainStore/reduxSlices/ticketDetailSlice";
import { useRouter } from "next/navigation";
import DatePicker from "react-date-picker";
import axios from "axios";

export default function Page() {
  const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/dtfvdjvyr/image/upload`;
  const UPLOAD_PRESET = "ml_default";
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const [formDetails, setFormDetails] = useState({
    ticketName: "",
    ticketDescription: "",
    category: "",
    amount: "",
    quantity: "",
    coverImage: null as string | null,
    coverImageName: "",
    location: "",
  });
  // const uploadFileToCloudinary = async (base64Image: string) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", base64Image);
  //     formData.append("upload_preset", UPLOAD_PRESET);

  //     const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //       console.log(response.data.secure_url,'WHAT I AM LOOKING FOR')
  //     return( response.data.secure_url); // URL of the uploaded image
  //   } catch (error) {
  //     console.error("Error uploading image", error);
  //     return undefined;
  //   }
  // };
  const CustomOutlinedInput = styled(OutlinedInput)(() => ({
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: 16,
      borderColor: "#4B5768",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00D300",
    },
    "& .MuiOutlinedInput-input": {
      color: "#E0FFE0",
    },
  }));

  const CustomInputLabel = styled(InputLabel)(() => ({
    fontSize: "1rem",
    color: "#64748B",
    "&.Mui-focused": {
      color: "#64748B",
      fontSize: "1rem",
      transform: "translate(14px, -6px) scale(0.75)",
      padding: "0rem",
    },
  }));

  // console.log(formDetails);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      date: e.target.value,
    }));
  };
  const handleSelectChange = (e: any) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      category: e.target.value,
    }));
  };

  const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      const file = files[0];
      const { name } = file;

      reader.onload = (event) => {
        const dataURL = event?.target?.result as string;
        // const getPicture = uploadFileToCloudinary(dataURL);

        setFormDetails((prevDetails) => ({
          ...prevDetails,
          coverImage: dataURL,
          coverImageName: name, // Set both coverImage and coverImageName here
        }));
      };

      reader.readAsDataURL(file);
    } else {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        coverImage: null,
        coverImageName: "",
      }));
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true);
    dispatch(ticketAction.getTicketDetails(formDetails));
    setIsLoading(false);
    router.push("/dashboard/create-ticket/ticket-preview");
    console.log("working");
  };

  return (
    <div>
      <form className="px-[32px] w-full" onSubmit={handleFormSubmit}>
        <div className="w-full flex gap-[48px]">
          <div className="w-1/2 flex flex-col gap-y-[32px]">
            <Box>
              <TextField
                id="ticketName"
                label="Ticket Name"
                variant="outlined"
                fullWidth
                value={formDetails.ticketName}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#4B5768",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#4B5768",
                      borderRadius: "16px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#64748B",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00D300",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#00D300",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#E0FFE0",
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                id="ticketDescription"
                label="Ticket Description"
                multiline
                rows={4}
                fullWidth
                value={formDetails.ticketDescription}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#4B5768",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#4B5768",
                      borderRadius: "16px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#64748B",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00D300",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#00D300",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#E0FFE0",
                  },
                }}
              />
            </Box>
            <Box>
              <FormControl fullWidth>
                <CustomInputLabel id="Select Category">
                  Select Category
                </CustomInputLabel>
                <Select
                  labelId="Select Category"
                  id="category"
                  value={formDetails.category}
                  input={<CustomOutlinedInput />}
                  onChange={handleSelectChange}
                >
                  <MenuItem value={"category1"}>
                    <p className="text-purpletwo"> 🎉 Parties & Socials</p>
                  </MenuItem>
                  <MenuItem value={"category2"}>
                    <p className="text-purpletwo"> 🍴 Food & Drink</p>
                  </MenuItem>
                  <MenuItem value={"category3"}>
                    <p className="text-purpletwo"> 🌟 Charity & Causes</p>
                  </MenuItem>
                  <MenuItem value={"category4"}>
                    <p className="text-purpletwo"> 💻 Tech & Innovation</p>
                  </MenuItem>
                  <MenuItem value={"category4"}>
                    <p className="text-purpletwo"> 🎓 Education & Workshops</p>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField
                id="amount"
                label="Enter Amount (SOL)"
                variant="outlined"
                fullWidth
                value={formDetails.amount}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#4B5768",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#4B5768",
                      borderRadius: "16px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#64748B",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00D300",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#00D300",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#E0FFE0",
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                id="quantity"
                label="Quantity"
                variant="outlined"
                fullWidth
                value={formDetails.quantity}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#4B5768",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#4B5768",
                      borderRadius: "16px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#64748B",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00D300",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#00D300",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#E0FFE0",
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                fullWidth
                value={formDetails.location}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#4B5768",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#4B5768",
                      borderRadius: "16px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#64748B",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00D300",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#00D300",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#E0FFE0",
                  },
                }}
              />
            </Box>
            <Box>
              <input
                type="date"
                placeholder="Date"
                onChange={handleDateChange}
                className="bg-[#191d2380] text-[#4B5768] mt-1 p-4 block w-full border border-[#4B5768] rounded-[12px] shadow-sm focus:outline-none focus:ring-[#00D300] focus:border-[#00D300] sm:text-sm"
              />
            </Box>
          </div>
          <div className="w-1/2 flex flex-col gap-y-[32px]">
            <TicketComponent
              id="coverImage"
              onChange={handleCoverImageChange}
              image={formDetails.coverImage}
              first="Ticket Image"
              second="Drag and drop your image here to upload"
              third="Supports JPG, JPEG, PNG"
              fourth="Max. upload size 2MB"
              labelButton="Upload"
              icon={<Picture />}
            />
          </div>
        </div>
        <div className="flex items-end justify-end px-[24px] pt-[24px] pb-[32px] gap-[16px]">
          <Button
            rightIcon={<ArrowRight />}
            label="Next"
            fit
            loading={isLoading}
            customClassName="font-open-sas text-body-s text-fontgreenishColor"
            size="smaller"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
