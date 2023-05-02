import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch("http://localhost:9000/posts");
      let data = await res.json();
      return data;

      // let dtat = [];
      // await fetch("http://localhost:9000/posts")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     // return console.log("data",data);
      //     dtat = data;
      //   });
      // return dtat;

      // let data = [];
      // await axios.get("http://localhost:9000/posts").then(function (response) {
      //   data = response.data;
      // });
      // return data;

      // let data = [];

      // let res=  await axios.get("http://localhost:9000/posts");
      // return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (id, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch(`http://localhost:9000/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });
      let data = await res.json();
      return data;

      // let dtat = [];
      // await fetch("http://localhost:9000/posts")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     // return console.log("data",data);
      //     dtat = data;
      //   });
      // return dtat;

      // let data = [];
      // await axios.get("http://localhost:9000/posts").then(function (response) {
      //   data = response.data;
      // });
      // return data;

      // let data = [];

      // let res=  await axios.get("http://localhost:9000/posts");
      // return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addPosts = createAsyncThunk(
  "posts/addPosts",
  async (obj, thunkAPI) => {
    let { rejectWithValue,getState } = thunkAPI;
    
    let {auth}=getState();
// console.log("auth",auth)
obj.user=auth.userName;
    try {
      let res = await fetch(`http://localhost:9000/posts`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(obj)
      });
      let data = await res.json();
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const upddatPost = createAsyncThunk(
  "posts/upddatPost",
  async (obj, thunkAPI) => {
    let { rejectWithValue,getState } = thunkAPI;
    
    let {auth}=getState();
// console.log("auth",auth)
obj.user=auth.userName;
let id=+obj.id;
console.log(obj)
    try {
      let res = await fetch(`http://localhost:9000/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(obj)
      });
      let data = await res.json();
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

let postsSlice = createSlice({
  initialState: {
    record: [],
    looding: false,
    error: null,
  },
  name: "posts",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.looding = true;
      state.error = null;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.looding = false;
      state.record.push(...action.payload);
      // console.log("action.payload", action);
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.looding = false;
      state.error = action.payload;
      console.log("action.payload", state.error);
    });
//////////////////////////////////////////////////////////////
    builder.addCase(deletePosts.pending, (state, action) => {
      state.looding = true;
      state.error = null;
    });
    
    builder.addCase(deletePosts.fulfilled, (state, action) => {
      state.looding = false;
      // state.record.push(...newStateRecord)
      let newStateRecord = state.record.filter(
        (rec) => rec.id !== action.meta.arg
      );
      state.record = newStateRecord;
      console.log("action.payload", action);
      // console.log("action.payload", state);
    });
    builder.addCase(deletePosts.rejected, (state, action) => {
      state.looding = false;
      state.error = action.payload;
      console.log("action.payload", state.error);
    });
    //////////////////////////////////////////////////////////////
    builder.addCase(addPosts.pending, (state, action) => {
      state.looding = true;
      state.error = null;
    });
    
    builder.addCase(addPosts.fulfilled, (state, action) => {
      state.looding = false;
      state.record.push(action.payload)
      // let newStateRecord = state.record.filter(
      //   (rec) => rec.id !== action.meta.arg
      // );
      // state.record = newStateRecord;
      // console.log("action.payload", action);
      // console.log("action.payload", state);
    });
    builder.addCase(addPosts.rejected, (state, action) => {
      state.looding = false;
      state.error = action.payload;
      console.log("action.payload", state.error);
    });
    //////////////////////////////////////////////////////////////
    builder.addCase(upddatPost.pending, (state, action) => {
      state.looding = true;
      state.error = null;
    });
    
    builder.addCase(upddatPost.fulfilled, (state, action) => {
      state.looding = false;
      // state.record.push(action.payload)
      let newStateRecord = state.record.map(
        (rec) => rec.id === action.payload.id?action.payload:rec
      );
      state.record = newStateRecord;
      // console.log("action.payload UPPDD", action);
      // console.log("action.payload", state);
    });
    builder.addCase(upddatPost.rejected, (state, action) => {
      state.looding = false;
      state.error = action.payload;
      console.log("action.payload", state.error);
    });
  },
});

export let { addBook } = postsSlice.actions;
export default postsSlice.reducer;
