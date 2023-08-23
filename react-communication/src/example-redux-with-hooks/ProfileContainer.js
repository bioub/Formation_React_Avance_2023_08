import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  return (
    <Profile
      name={name}
      onUpdate={(name) =>
        dispatch({
          type: "UPDATE_USER",
          payload: {
            name,
          },
        })
      }
    />
  );
}

export default Profile;
