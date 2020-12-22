let API_ROUTE;

if (process.env.NODE_ENV === "production") {
  API_ROUTE = "https://test.topratedprofessors.com";
} else {
  API_ROUTE = "http://127.0.0.1:2000";
}

export default API_ROUTE;
