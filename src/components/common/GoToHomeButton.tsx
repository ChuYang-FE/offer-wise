import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const GoToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/");
      }}
    >
      Go to Home
    </Button>
  );
};
