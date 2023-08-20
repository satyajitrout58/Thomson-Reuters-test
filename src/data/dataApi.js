import data from "./medal.json";

export const medalMockApi = function () {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 2) {
      setTimeout(resolve({ status: "success", result: data }), 300);
    } else {
      setTimeout(
        reject({
          statue: "error",
          error: "There is a problem from our end please try after some time"
        }),
        300
      );
    }
  });
};
