import { Route } from "./+types/teams-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Team | WeMake" },
    { name: "description", content: "Submit your team to WeMake" },
  ];
};

export default function TeamsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Teams</h1>
      <div className="grid gap-6">{/* Teams list will go here */}</div>
    </div>
  );
}
