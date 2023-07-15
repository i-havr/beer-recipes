import { Outlet, useParams, useLocation } from "react-router-dom";

export default function BeerRecipe() {
  const { beerId } = useParams();
  return (
    <div>
      <p>{`Hello, I'm page of #${beerId} recipe`}</p>
    </div>
  );
}
