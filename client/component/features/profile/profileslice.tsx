import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface ProfileState {
  id: String;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  bio: "",
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
      .addCase(createProfile.fulfilled, (state) => {
        state.status = "succeeded";
        toast.success("Profile created successfully");
        // Redirect to dashboard
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.status = "failed";
        toast.error(`Error: ${action.payload}`);
      });
  },
});

export default profileSlice.reducer;
