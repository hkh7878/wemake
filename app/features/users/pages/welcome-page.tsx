import { Resend } from "resend";
import { render } from "@react-email/components";
import { WelcomeUser } from "react-email-starter/emails/welcome-user";
import { Route } from "./+types/welcome-page";

const client = new Resend(process.env.RESEND_API_KEY);

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { data, error } = await client.emails.send({
    from: "Nico <nico@mail.wemake.cool>",
    to: ["nico@nomadcoders.co"],
    subject: "Welcome to Wemake.cool",
    react: <WelcomeUser username={"Resend"} />,
  });
  return Response.json({ data, error });
};
