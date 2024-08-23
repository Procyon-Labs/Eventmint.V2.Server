import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface ProfileData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  image: string;
}

interface ProfileState {
  id: string;
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
    { profileData, publicKey }: { profileData: ProfileData; publicKey: string },
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
      .addCase(
        createProfile.fulfilled,
        (state, action: PayloadAction<ProfileData>) => {
          state.status = "succeeded";
          state.id = action.payload.id;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.email = action.payload.email;
          state.bio = action.payload.bio;
          state.image = action.payload.image;
          state.error = null;
          toast.success("Profile created successfully");
        }
      )
      .addCase(createProfile.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(`Error: ${action.payload}`);
      });
  },
});

export default profileSlice.reducer;
