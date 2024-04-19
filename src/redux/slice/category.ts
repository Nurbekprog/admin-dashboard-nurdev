// import { categorySlice } from './category';
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// import Category from "../../types/categorySlice";

// interface initialStateTypes {
//   categories: Category[];
//   loading: boolean;
//   total: number;
// }

// const initialState: initialStateTypes = {
//   categories: [],
//   loading: false,
//   total: 0,
// };

// export const getCategories = createAsyncThunk(
//   "category/fetching",
//   async ({ search }: { search: string }) => {
//     const { data } = await request.get<Category[]>("category", {
//       params: { search },
//     });
//     return data;
//   }
// );

// export const categorySlice = createSlice({
//   initialState,
//   name: "category",
//   reducers: {
//     controlLoading(state) {
//       state.loading = !state.loading;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCategories.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(
//         getCategories.fulfilled,
//         (state, { payload }: PayloadAction<Category[]>) => {
//           state.loading = false;
//           state.categories = payload;
//           state.total = payload.length;
//         }
//       )
//       .addCase(getCategories.rejected, (state) => {
//         state.loading = false;
//       });
//   },
// });

// const { reducer: categoryReducer, name: categoryName } = categorySlice;

// const { controlLoading } = categorySlice.actions;

// export { categoryReducer as default, categoryName, controlLoading };
