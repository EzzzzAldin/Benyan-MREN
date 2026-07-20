import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./FormDashboard.module.css";

function FormDashboard() {
  // L1 => States & Global Data
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "all",
  });

  const password = watch("password");
  // L2 => API Call
  // L3 => Handler
  const onSubmitHandler = async (data) => {
    try {
      console.log(data);
      // Get Data
      await axios.post("http://localhost:8000/api/dashboard/users", data);
      alert("User Create Done");
      navigate("/dashboard/users");
    } catch (error) {
      const errSever = error.response.data.msg;
      alert(errSever);
    }
  };
  // L4 => JSX
  return (
    <div className="container py-4">
      <div className={styles.formWrapper}>
        <h5 className="fw-semibold mb-4">Add New User</h5>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">User Name</label>
              <input
                type="text"
                {...register("username", {
                  required: "Username is Required",
                  minLength: {
                    value: 1,
                    message: "Username Must Be More 3 Char",
                  },
                })}
                className={`form-control ${styles.input} ${errors.username ? "is-invalid" : ""}`}
              />

              {errors.username && (
                <div className="invalid-feedback">
                  {errors.username.message}
                </div>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`form-control ${styles.input} ${errors.email ? "is-invalid" : ""}`}
              />

              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="col-12 col-md-12">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                {...register("phoneNumber", {
                  required: "Phone Number is Required",
                  minLength: {
                    value: 11,
                    message: "Phone Number Must Be 11 digit",
                  },
                })}
                className={`form-control ${styles.input} ${errors.phoneNumber ? "is-invalid" : ""}`}
              />

              {errors.phoneNumber && (
                <div className="invalid-feedback">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Password Must Be More Than 5 Char",
                  },
                })}
                className={`form-control ${styles.input} ${errors.password ? "is-invalid" : ""}`}
              />

              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is Required",
                  validate: (value) =>
                    value === password || "Password Not Matched",
                })}
                className={`form-control ${styles.input} ${errors.confirmPassword ? "is-invalid" : ""}`}
              />

              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            <div className="col-12 d-flex justify-content-end mt-3">
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDashboard;
