/**
 * Custom Hook: useJobApplication
 * Description: Custom React hook for handling job application functionality.
 */

import { useOutletContext } from "react-router-dom";

/**
 * Custom React hook for handling job application functionality.
 * @returns {object} - Object containing functions for handling job application and checking if a job is already applied.
 */
const useJobApplication = () => {
  // Accessing applyJob and currentUser from outlet context
  const { applyJob, currentUser } = useOutletContext();

  /**
   * Function to handle job application.
   * @param {string} id - ID of the job to apply for.
   */
  const handleJobApplication = async (id) => {
    await applyJob(currentUser.username, id);
  };

  /**
   * Function to check if a job is already applied by the current user.
   * @param {string} id - ID of the job to check.
   * @returns {boolean} - True if the job is already applied, false otherwise.
   */
  const isApplied = (id) => {
    const { applications } = currentUser;
    return applications.includes(id);
  };

  return { handleJobApplication, isApplied };
};

export default useJobApplication;
