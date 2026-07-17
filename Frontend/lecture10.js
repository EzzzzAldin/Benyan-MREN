// Zone 3: Handlers
  const onSubmit = async (data) => {
    try {
      // Step 1
    console.log(data)
  
  
      await axios.post("http://localhost:8000/api/dashboard/users", data);

      alert("User added successfully!");

      navigate("/dashboard/users");
    } catch (error) {
    // Step 1
    console.log(error.response.data.msg);
  
      const errorMessage = error.response?.data?.msg || "Failed to add user";
      alert(errorMessage);
    }
  };

  <form onSubmit={handleSubmit(onSubmit)}></form>

// IN 1
<input
  type="text"
  {...register("username", {
    required: "Username is required",
    minLength: {
      value: 3,
      message: "Username must be at least 3 characters",
    },
  })}
      
  className={`form-control ${styles.input} ${errors.username ? "is-invalid" : ""}`}
/>
{errors.username && (
  <div className="invalid-feedback">
    {errors.username.message}
  </div>
    )}

    // IN 2
 <input
  type="email"
  {...register("email", {
    required: "Email is required",
  })}
  className={`form-control ${styles.input} ${errors.email ? "is-invalid" : ""}`}
/>
{errors.email && (
  <div className="invalid-feedback">{errors.email.message}</div>
    )}

    // IN 3
 <input
  type="text"
  {...register("phoneNumber", {
    required: "Phone number is required",
    minLength: {
      value: 11,
      message: "Phone number must be at least 11 digits",
    },
  })}
  className={`form-control ${styles.input} ${errors.phoneNumber ? "is-invalid" : ""}`}
/>
{errors.phoneNumber && (
  <div className="invalid-feedback">
    {errors.phoneNumber.message}
  </div>
    )}

// IN 4    
<input
  type="password"
  {...register("password", {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
  })}
  className={`form-control ${styles.input} ${errors.password ? "is-invalid" : ""}`}
/>
{errors.password && (
  <div className="invalid-feedback">
    {errors.password.message}
  </div>
    )}

// IN 5
<input
  type="password"
  {...register("confirmPassword", {
    required: "Please confirm your password",
    validate: (value) =>
      value === password || "Passwords do not match",
  })}
  className={`form-control ${styles.input} ${errors.confirmPassword ? "is-invalid" : ""}`}
/>
{errors.confirmPassword && (
  <div className="invalid-feedback">
    {errors.confirmPassword.message}
  </div>
    )}

// Btn Submit
<button
  type="submit"
  className="btn btn-primary btn-sm"
  disabled={isSubmitting}
>
  {isSubmitting ? "Saving..." : "Submit"}
    </button>

// Lecture part 2
npm install @reduxjs/toolkit react-redux

/ src / store / authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: null, 
    isAuthenticated: false, 
  },

  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// main.jsx
import { Provider } from "react-redux";
import { store } from "../lecture10.js";

<Provider store={store}>
  <App />
</Provider>

// Login JSX
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess } from "../../../store/authSlice";

const dispatch = useDispatch();
  
const onSubmitHandler = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/dashboard/login",
        data,
      );

      const token = response.data.token;

      dispatch(loginSuccess(token));

      localStorage.setItem("token", token);

      navigate("/dashboard/home");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid Email or Password. Please try again.");
    }
};
  

// Logout
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";


// Layer 1 => (states & Global Data)
  const dispatch = useDispatch();
const navigate = useNavigate();
  
 const onLogoutHandler = () => {
    dispatch(logout());

    localStorage.removeItem("token");

    navigate("/dashboard");
};
  
<button
  onClick={onLogoutHandler}
  className="btn btn-sm btn-outline-danger"
>
  Logout
</button>

// Extra
admin: null,
  state.admin = action.payload.admin;
state.admin = null;

// onSubmitHandler
const { token, admin } = response.data;

dispatch(loginSuccess({token, admin}));

localStorage.setItem("token", token);
localStorage.setItem("admin", JSON.stringify(admin));

const admin = useSelector((state) => state.auth.admin);

const adminNameAPI = admin?.username || "Loading...";




