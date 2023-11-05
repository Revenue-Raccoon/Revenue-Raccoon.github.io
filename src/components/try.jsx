import { useUser } from './UserContext';

function TryComponent() {
  const user = useUser();

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default TryComponent
