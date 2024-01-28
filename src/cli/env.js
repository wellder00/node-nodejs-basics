const parseEnv = () => {
  const envVariables = process.env;
  console.log(envVariables)

  const rssVariables = Object.keys(envVariables)
    .filter((variable) => variable.startsWith("RSS_"))
    .map((variable) => `${variable}=${envVariables[variable]}`);

  console.log(rssVariables.join("; "));
};

parseEnv();
