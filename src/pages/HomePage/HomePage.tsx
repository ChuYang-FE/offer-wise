import { Button } from "@nextui-org/react";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div>
        <Button
          onClick={() => {
            navigate("/not-found");
          }}
        >
          Go to Not Found
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/about");
          }}
        >
          Go to About
        </Button>
      </div>
    </div>
  );
};
