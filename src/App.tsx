import { Button } from "@nextui-org/button";
import { Pagination, Switch } from "@nextui-org/react";

function App() {
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };
  return (
    <div className="flex min-h-screen items-center justify-center gap-x-4">
      <div className="rounded-md">
        <h1 className="my-2">Hello Offer Wise!</h1>
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
}

export default App;
