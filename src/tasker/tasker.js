import fakeTasker from "./fakeTasker";

const tasker = window;
window.tasker = tasker;

// export default taskerService(
//   "production" === process.env.NODE_ENV ? tasker : fakeTasker
// );

const t = () => {
  return "production" === process.env.NODE_ENV ? tasker : fakeTasker;
};
export default t();
