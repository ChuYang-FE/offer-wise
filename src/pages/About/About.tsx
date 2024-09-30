import { GoToHomeButton } from "../../components";

export const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-x-4">
      <div className="rounded-md">
        <h1 className="my-2">About me</h1>
      </div>
      <GoToHomeButton />
    </div>
  );
};
