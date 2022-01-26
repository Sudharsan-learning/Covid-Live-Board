import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export function getLatestCovidCases() {
  return axios.get(`${baseUrl}/stats/latest`);
}

export function getLatestTestResult() {
  return axios.get(`${baseUrl}/stats/testing/latest`);
}
