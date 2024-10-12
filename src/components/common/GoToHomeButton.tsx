import { Button } from "@nextui-org/react";

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
