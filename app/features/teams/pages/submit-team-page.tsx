import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Textarea } from "~/common/components/ui/textarea";
import { Route } from "./+types/submit-team-page";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Team | WeMake" },
    { name: "description", content: "Submit your team to WeMake" },
  ];
};

export default function SubmitTeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Create Team" subtitle="Create a team to find a team mate" />
      <Form className="max-w-screen-2xl flex flex-col items-center gap-10 mx-auto">
        <div className="grid grid-cols-3 w-full gap-10">
          <InputPair
            label="What is the name of your product?"
            description="(20 characters max)"
            name="name"
            maxLength={20}
            type="text"
            id="name"
            required
          />
          <SelectPair
            label="What is the stage of your product?"
            description="(20 characters max)"
            placeholder="Select the stage of your product"
            name="type"
            required
            options={[
              { label: "Idea", value: "idea" },
              { label: "Prototype", value: "prototype" },
              { label: "MVP", value: "mvp" },
              { label: "Launched", value: "launched" },
            ]}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create team
        </Button>
      </Form>
    </div>
  );
}
