import { useLogin } from "../components/hooks/useLogin";
import Navbar from "../components/Layouts/Navbar";

function ProfilePage() {
  const username = useLogin();
  return (
    <div>
      <Navbar />
      <h1>Profile Page</h1>
      <p>{username}</p>
    </div>
  );
}

export default ProfilePage;
