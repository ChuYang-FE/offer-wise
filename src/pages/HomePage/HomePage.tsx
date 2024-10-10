import { Button, Pagination, Switch } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="rounded-md">
        <h1 className="my-2">Hello Offer Wise!</h1>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/not-found");
          }}
          color="danger"
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
      <div>
        <Button>Press me</Button>
      </div>
      <div>
        <Pagination total={10} initialPage={1} />
      </div>
      <div>
        <Switch
          defaultSelected
          aria-label="Automatic updates"
          onChange={handleSwitch}
        />
      </div>
    </div>
  );
};
