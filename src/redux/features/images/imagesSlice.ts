import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface InitialState {
  images: image[];
  status: string;
  limit: number;
  image: image;
}

const initialState: InitialState = {
  images: [],
  status: "idle",
  limit: 28,
  image: {
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: "",
  },
};

export const getImages = createAsyncThunk(
  "images/getImages",
  async (obj: { limit: number }) => {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_limit=${obj.limit}_page=1`
      )
      .then((res) => res.data);
  }
);

export const getImage = createAsyncThunk(
  "images/getImage",
  async (id: string) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.data);
  }
);

export const imagesSlice = createSlice({
  name: "images",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.limit += 7;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.images = action.payload;
      state.status = "success";
    });
    builder.addCase(getImages.rejected, (state, action) => {
      state.status = "error";
    });
    builder.addCase(getImage.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getImage.fulfilled, (state, action) => {
      state.image = action.payload;
      state.status = "success";
    });
    builder.addCase(getImage.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export const { increment } = imagesSlice.actions;

export default imagesSlice.reducer;
