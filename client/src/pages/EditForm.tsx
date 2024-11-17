import useUserById from "../hooks/useUserById";
import CreateUserForm from "../components/CreateUserForm";
import { useParams } from "react-router-dom";

export default function EditForm() {
  const { id } = useParams();
  const { user, loadingUser } = useUserById(id as string);
  if (loadingUser) return <div>Loading...</div>;
  return <CreateUserForm editSession={user} />;
}
