import React from 'react';

function Profile({ name, onUpdate }) {
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onUpdate(event.target.value)
        }}
      >
        <p>
          Name :
          <input name="name" defaultValue={name} />
        </p>
        <p>
          <button>Change</button>
        </p>
      </form>
    </div>
  );
}

export default Profile;
