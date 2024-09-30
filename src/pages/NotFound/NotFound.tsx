import { GoToHomeButton } from "../../components";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-x-4">
      <div className="rounded-md">
        <h1 className="my-2">404 Not Found</h1>
      </div>
      <GoToHomeButton />
    </div>
  );
};
