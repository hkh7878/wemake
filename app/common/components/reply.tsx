import { MessageCircleIcon, DotIcon } from "lucide-react";
import { Form, Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

interface ReplyProps {
  avatarUrl?: string;
  username: string;
  userLink: string;
  timestamp: string;
  content: string;
  topLevel?: boolean;
}

export function Reply({
  username,
  avatarUrl,
  content,
  timestamp,
  userLink,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const toggleReplying = () => setReplying((prev) => !prev);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col item-start gap-5 w-2/3">
        <Avatar className="size-14">
          <AvatarFallback>N</AvatarFallback>
          {avatarUrl && <AvatarImage src={avatarUrl} />}
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2 items-center">
            <Link to={userLink}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-5" />
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-muted-foreground">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" />
            Reply
          </Button>
        </div>
      </div>
      {replying && (
        <Form className="flex items-start gap-5 w-3/4">
          <Avatar className="size-14">
            <AvatarFallback>N</AvatarFallback>
            <AvatarImage src="https://github.com/serranoarevalo.png" />
          </Avatar>
          <div className="flex flex-col gap-5 items-end w-full">
            <Textarea
              placeholder="Write a reply"
              className="w-full resize-none"
              rows={5}
            />
            <Button>Reply</Button>
          </div>
        </Form>
      )}
      {topLevel && (
        <div className="pl-20 w-full">
          <Reply
            username="Nicolas"
            userLink="/users/@nico"
            timestamp="12 hours ago"
            content="Hello, I'm looking for a productivity tool that can help me manage my tasks and projects. Any recommendations? I have tried Notion, but it's not what I'm looking for. I dream of a tool that can help me manage my tasks and projects. Any recommendations?"
            avatarUrl="https://github.com/serranoarevalo.png"
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}
