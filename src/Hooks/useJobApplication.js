import { useOutletContext } from "react-router-dom";

const useJobApplication = () => {
  const { applyJob, currentUser } = useOutletContext();

  const handleJobApplication = async (id) => {
    await applyJob(currentUser.username, id);
  };

  const isApplied = (id) => {
    const { applications } = currentUser;
    return applications.includes(id);
  };

  return { handleJobApplication, isApplied };
};

export default useJobApplication;
