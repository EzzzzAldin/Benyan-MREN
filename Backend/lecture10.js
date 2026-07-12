const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    //   Send Json Response
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

router.get("/all", getAllUsers);
const cors = require("cors");

app.use(cors());

const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

<tr>
  <th>User</th>
  <th>Email</th>
  <th>Phone Number</th>
  <th>Status</th>
  <th>Actions</th>
</tr>;

<tr key={user._id}>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>{user.phoneNumber}</td>
    <td>{user.isActive ? "Active" : "Inactive"}</td>


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/dashboard/users/all",
        );
        console.log(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/dashboard/users/all",
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  {loading ? (
    <tr><td colSpan="4" className="text-center">Loading...</td></tr>
  )

    
  // Part 2
    
  npm install react-hook-form

import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// L1 => States & Global Data
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    mode: "all",
  });

  const password = watch("password");
  
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

  <form onSubmit={handleSubmit(onSubmit)}>

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