import axios from "axios";

// Starting points
const START_POINT = "http://service_host_ip";
const EURECA_AS = `${START_POINT}:8080/as`;
const ALUMNI_AS = `${START_POINT}:8082/alumni`;

// for Eureca Authentication Service
const api_EAS = axios.create({
  baseURL: EURECA_AS,
  headers: {
    "Content-Type": "application/json",
  },
});

// for Alumnus Service API
const api_AS = axios.create({
  baseURL: ALUMNI_AS,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api_EAS, api_AS };


import axios from "axios";
