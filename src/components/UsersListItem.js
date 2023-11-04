import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
// import { useThunk } from "../custom-hook/use-thunk";
import useThunk from "../custom-hook/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleDeleteUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
        <GoTrash />
      </Button>
      {error && <div>Error Deleting User..</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
