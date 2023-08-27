import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./slices/adminSlice";
import userSlice from "./slices/userSlice";
import sessionSlice from "./slices/sessionSlice";

const store = configureStore({
  reducer: {
    adminSlice: adminSlice,
    userSlice: userSlice,
    sessionSlice: sessionSlice,
  },
});

export default store;
