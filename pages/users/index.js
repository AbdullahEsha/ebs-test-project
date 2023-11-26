import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  // get the user from the store
  const user = useSelector((state) => state.auth.user);

  console.log("user", user);

  return (
    <div className="p-32">
      <h1>Redux Toolkit Test</h1>
      <p>Hi {user.email} </p>
    </div>
  );
};

export default Users;
