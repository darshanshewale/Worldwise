import { useNavigate } from "react-router-dom";
import Button from "./Button";

//this backbutton is utilized on form as well as on showing cities details which helps to go back page using useNavigate hook
function BackButton() {
  const navigate = useNavigate();
  // backbutton of which through -1 navigate goes to back page
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr;back
    </Button>
  );
}

export default BackButton;
