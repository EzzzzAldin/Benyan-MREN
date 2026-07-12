import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./FormDashboard.module.css";

function FormDashboard() {
  // L1 => States & Global Data
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
    } catch (error) {
      console.error;
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
                  required: "Username Is Required",
                  minLength: {
                    value: 3,
                    message: "Username Must Be More Than 3 Char",
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
              <input type="email" className={`form-control ${styles.input}`} />
            </div>

            <div className="col-12 col-md-12">
              <label className="form-label">Phone Number</label>
              <input type="text" className={`form-control ${styles.input}`} />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${styles.input}`}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${styles.input}`}
              />
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
