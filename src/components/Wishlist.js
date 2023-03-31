import { useParams, useNavigate, useSearchParams, useLocation, useActionData} from "react-router-dom";
import RouterForm from "./RouterForm";

const Wishlist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const actionData = useActionData();

  const params = useParams();

  console.log("Location" + JSON.stringify(location));
  // const [searchParams, setSearchParams] = useSearchParams();

  console.log("WishList Params" + JSON.stringify(params));

  return (
    <div>
      <span>Wishlist component</span>
      {params.id && <p>Wishlist Id - {params.id}</p>}
      {/* <RouterForm/> */}
    </div>
  );
};

export default Wishlist;

export function action() {
  //fetch

 // return data;
}
