import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface ProfileState {
  id: String;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  image: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  bio: "",
  image: "",
  status: "idle",
  error: null,
};

export const createProfile = createAsyncThunk(
  "profile/createProfile",
  async (
    { profileData, publicKey }: { profileData: any; publicKey: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `https://eventmint.onrender.com/api/v1/user/${publicKey}`,
        profileData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create profile"
      );
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { _id, firstName, lastName, email, bio, image } = action.payload;
        state.id = _id;
        state.firstName = firstName;
        state.lastName = lastName;
        state.email = email;
        state.bio = bio;
        state.image = image;
        toast.success("Profile created successfully");
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.status = "failed";
        toast.error(`Error: ${action.payload}`);
      });
  },
});

export default profileSlice.reducer;
