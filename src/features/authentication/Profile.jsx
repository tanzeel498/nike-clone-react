import { useState } from "react";
import ButtonLink from "../../ui/ButtonLink";
import useUser from "./useUser";
import EditDetailsForm from "./EditDetailsForm";
import EditPasswordForm from "./EditPasswordForm";
import Message from "../../ui/Message";
import useTimeout from "../../hooks/useTimeout";
import Button from "../../ui/Button";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";

function Profile() {
  const { user, isLoading } = useUser();
  const queryClient = useQueryClient();
  const [currentEdit, setCurrentEdit] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useTimeout(successMessage, () => setSuccessMessage(""));

  function handleCancel(e) {
    e?.preventDefault();
    setCurrentEdit("");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    queryClient.invalidateQueries(["user", "numCartItems"]);
  }

  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="mb-10 flex flex-col items-center">
        <div className="my-14 text-center">
          <h2 className="text-3xl">Account</h2>
          {successMessage !== "" && (
            <Message type="success">{successMessage}</Message>
          )}
        </div>

        <div className="flex w-full flex-col gap-10 px-8 mobile:px-16 tablet:w-1/2 tablet:flex-row tablet:justify-between tablet:gap-20">
          <div className="flex w-full flex-col gap-2">
            <h2 className="mb-3">Details</h2>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.dob}</p>
            {currentEdit !== "details" && (
              <span>
                <ButtonLink onClick={() => setCurrentEdit("details")}>
                  Edit
                </ButtonLink>
              </span>
            )}
            {currentEdit === "details" && (
              <EditDetailsForm
                firstName={user.firstName}
                lastName={user.lastName}
                dob={user.dob}
                onCancel={handleCancel}
                setSuccessMessage={setSuccessMessage}
              />
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <h2 className="mb-3">Login Details</h2>
            <div className="">
              <h4>Email</h4>
              <p>{user.email}</p>
            </div>
            <div>
              <h4>Password</h4>
              <div className="flex items-baseline gap-4">
                <p>xxxxxxxxxxxx</p>
                {currentEdit !== "password" && (
                  <ButtonLink onClick={() => setCurrentEdit("password")}>
                    Edit
                  </ButtonLink>
                )}
              </div>
            </div>
            {currentEdit === "password" && (
              <EditPasswordForm
                onCancel={handleCancel}
                setSuccessMessage={setSuccessMessage}
              />
            )}
          </div>
        </div>
        <div className="my-20 w-11/12 tablet:hidden">
          <Button size="large" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}

export default Profile;
