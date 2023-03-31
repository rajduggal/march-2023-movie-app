import { json } from "react-router-dom";

const fetchFacilities = () => {};

const loader = async () => {
  const data = getSomeData();
  return json(data);
};

// A shorcut for
// new Response(JSON.stringify(someValue), {
//     headers: {
//       "Content-Type": "application/json; utf-8",
//     },
//   });

//Usage
// function loader({ request, params }) {
//     const data = { some: "thing" };
//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json; utf-8",
//       },
//     });
//   }

//   function loader({ request, params }) {
//     const data = { some: "thing" };
//     return json(data, { status: 200 });
//   }

// Redirect

// import { redirect } from "react-router-dom";

// const loader = async () => {
//   const user = await getUser();
//   if (!user) {
//     return redirect("/login");
//   }
//   return null;
// };

//   A shortcut for
//   new Response("", {
//     status: 302,
//     headers: {
//       Location: someUrl,
//     },
//   });

// Defer
// async function loader() {
//   let product = await getProduct();
//   let reviews = getProductReviews(); 
//   // promise.all
//   return defer({ product, reviews });
// }

// document -> JavaScript -> Lazy Loaded Route -> data fetch 
// document -> JavaScript -> Lazy Loaded Route & data (in parallel)