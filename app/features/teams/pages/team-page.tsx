import { Hero } from "~/common/components/hero";
import { Route } from "./+types/team-page";
import { TeamCard } from "../components/team-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Team | WeMake" },
    { name: "description", content: "Submit your team to WeMake" },
  ];
};

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Teams" subtitle="Find a team looking for a new member." />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            id={`teamId-${index}`}
            leaderUsername="lynn"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
