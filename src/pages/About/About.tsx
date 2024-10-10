import { GoToHomeButton } from "../../components";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="rounded-md">
        <h1 className="my-2">About me</h1>
      </div>
      <GoToHomeButton />
    </div>
  );
};
