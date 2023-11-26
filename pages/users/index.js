import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  // get the user from the store
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  console.log("user", user);
  console.log("token", token);

  return (
    <div className="p-32">
      <h1>Redux Toolkit Test</h1>
      <p>Hi {user.email} </p>
      <p>token found!, {token}</p>
    </div>
  );
};

export default Users;
