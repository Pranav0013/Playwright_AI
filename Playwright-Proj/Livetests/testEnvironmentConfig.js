//In CI/CD pipelines, tests run against different environments.
// Write a JavaScript program using a switch statement that takes an
// environment name stored in a variable and prints the base URL, API key pattern, and timeout.
// Use const for fixed values and let for the assembled config.
//Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

let config = {};
const testEnvironment = (envName) => {
  switch (envName) {
    case "dev":
      config = {
        baseUrl: "https://dev-api.testingacademy.com",
        apiKey: "dev_key_xxxx-xxxx",
        timeout: 5000,
        description: "Development - Internal testing environment",
      };
      break;

    case "staging":
      config = {
        baseUrl: "https://staging-api.testingacademy.com",
        apiKey: "stg_key_xxxx-xxxx",
        timeout: 8000,
        description: "Staging - Pre-production mirror",
      };
      break;

    case "qa":
      config = {
        baseUrl: "https://qa-api.testingacademy.com",
        apiKey: "qa_key_xxxx-xxxx",
        timeout: 7000,
        description: "QA - Quality assurance environment",
      };
      break;

    case "production":
      config = {
        baseUrl: "https://api.testingacademy.com",
        apiKey: "prod_key_xxxx-xxxx",
        timeout: 10000,
        description: "Production - Live environment",
      };
      break;

    default:
      console.log("Unknown environment. Please verify envName.");
      break;
  }
};
testEnvironment("prodction"); // pass the environment name here
