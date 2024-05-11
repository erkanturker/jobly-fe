import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    console.log(import.meta.env);
    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /**
   * Get authentication token for a user.
   * @param {object} data - User credentials.
   * @returns {Promise<string>} - Resolves with authentication token.
   */
  static async authToken(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /**
   * Get details of all companies.
   * @returns {Promise<Array<object>>} - Resolves with an array of company details.
   */
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /**
   * Register a new user.
   * @param {object} data - User registration details.
   * @returns {Promise<string>} - Resolves with authentication token.
   */

  static async createUser(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /**
   * Update user details.
   * @param {string} username - Username of the user.
   * @param {object} data - User details to update.
   * @returns {Promise<object>} - Resolves with updated user details.
   */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /**
   * Get details of a company by its handle.
   * @param {string} handle - Company handle.
   * @returns {Promise<object>} - Resolves with company details.
   */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /**
   * Get details of all companies.
   * @returns {Promise<Array<object>>} - Resolves with an array of company details.
   */
  static async getAllCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /**
   * Search companies by name.
   * @param {string} name - Company name to search.
   * @returns {Promise<Array<object>>} - Resolves with an array of matching company details.
   */
  static async getCompanyByName(name) {
    let res = await this.request(`companies?name=${name}`);
    return res.companies;
  }

  /**
   * Get details of all jobs.
   * @returns {Promise<Array<object>>} - Resolves with an array of job details.
   */
  static async getAllJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }

  /**
   * Search jobs by title.
   * @param {string} title - Job title to search.
   * @returns {Promise<Array<object>>} - Resolves with an array of matching job details.
   */
  static async getJobsByTitle(title) {
    let res = await this.request(`jobs?title=${title}`);
    return res.jobs;
  }

  /**
   * Apply for a job.
   * @param {string} username - Username of the user applying for the job.
   * @param {string} jobId - ID of the job to apply for.
   * @returns {Promise<boolean>} - Resolves with true if the application is successful.
   */
  static async applyJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res.applied;
  }
}

export default JoblyApi;
