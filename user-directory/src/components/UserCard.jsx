function UserCard({ user }) {

  return (
    <div className="card">

      <h3>{user.name}</h3>

      <p>
        📧 {user.email}
      </p>

      <p>
        📱 {user.phone}
      </p>

      <p>
        🌐 {user.website}
      </p>

    </div>
  );
}

export default UserCard;