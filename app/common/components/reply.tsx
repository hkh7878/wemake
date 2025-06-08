import { MessageCircleIcon, DotIcon } from "lucide-react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface ReplyProps {
  avatarUrl?: string;
  avatarFallback: string;
  username: string;
  userLink: string;
  timeAgo: string;
  content: string;
  onReply?: () => void;
}

export function Reply({
  avatarUrl,
  avatarFallback,
  username,
  userLink,
  timeAgo,
  content,
  onReply,
}: ReplyProps) {
  return (
    <div className="flex item-start gap-5 w-2/3">
      <Avatar className="size-14">
        <AvatarFallback>{avatarFallback}</AvatarFallback>
        {avatarUrl && <AvatarImage src={avatarUrl} />}
      </Avatar>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex gap-2 items-center">
          <Link to={userLink}>
            <h4 className="font-medium">{username}</h4>
          </Link>
          <DotIcon className="size-5" />
          <span className="text-xs text-muted-foreground">{timeAgo}</span>
        </div>
        <p className="text-muted-foreground">{content}</p>
        <Button variant="ghost" className="self-end" onClick={onReply}>
          <MessageCircleIcon className="size-4" />
          Reply
        </Button>
      </div>
      <div>{/* <Reply /> */}</div>
    </div>
  );
}
