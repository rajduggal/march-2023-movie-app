import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

//Fetcher.state - idle || loading || submitting

// Fetcher.Form
const FetcherExample = () => {
  const fetcher = useFetcher();
  fetcher.

  //Fetcher.load
  useEffect(() => {
    if (fetcher.state === "idle") {
      fetcher.load("/Movies");
    }
  }, []);

  //fetcher.submit
//   useEffect(() => {
//     const userIsIdle = true;
//     if (userIsIdle) {
//       fetcher.submit({ idle: true }, { method: "post", action: "/Movies" });
//     }
//   }, []);

  //fetcher.data - The returned data from the loader or action is stored here. Once the data is set, it persists on the fetcher even through reloads and resubmissions.
  useEffect(() => {
    if (
        fetcher.state === "idle" &&
        !fetcher.data
      ) {
        fetcher.load('/Movies');
      }
  }, [])

  //fetcher.formData
//   useEffect(() => {
//     let firstName = fetcher.formData?.get("firstName");
//     console.log(firstName);
//   }, [fetcher])

  return (
    //won't cause any navigation
    <fetcher.Form method="post" action="/Movies">
      <p>Enter Name: </p>
      <input type="text"  placeholder="Name" name="firstName"/>
    </fetcher.Form>
  );
};

export default FetcherExample;
