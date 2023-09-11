import { useState } from "react";
import { delay } from "../utils/utilFunctions";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, user) => {
    const randomNumber = Math.random();
    setLoading(true);
    try {
      await delay(2000);
      if (randomNumber < 0.50) {
        throw new Error("Something went wrong");
      }
      setResponse({
        message: `Thanks for your submission ${user.name}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
