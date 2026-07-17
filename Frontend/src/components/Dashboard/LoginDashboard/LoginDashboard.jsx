import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./LoginDashboard.module.css";

function LoginDashboard() {
  // L1 => State & Global Data
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all" });

  // L2 => Effects
  // L3 => Handler
  const onSubmitHandler = (data) => {
    console.log(data);
  };

  // L4 => JSX
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className={styles.loginWrapper}>
        <h5 className="fw-semibold mb-4 text-center">Dashboard Login</h5>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          {/* Email Address */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`form-control ${styles.input} ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`form-control ${styles.input} ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-100 btn-sm"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginDashboard;
