import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";

import myAvatar from "../../images/avatar.jpg";

export const UserGithubCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [myFollowers, setMyFollowers] = useState(0);
  const { t } = useTranslation();

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="sm" size="lg" src={myAvatar} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {t("personalInfo.localizedName")}
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              @ChuYang-FE
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "border-default-200 bg-transparent text-foreground"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => {
            setIsFollowed(!isFollowed);
            setMyFollowers(isFollowed ? myFollowers - 1 : myFollowers + 1);
          }}
        >
          {isFollowed ? t("action.unfollow") : t("action.follow")}
        </Button>
      </CardHeader>
      <CardBody className="gap-2 px-3 py-0">
        <p className="pl-px text-small text-default-500">
          {t("personalInfo.description")}
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
        <Divider className="my-1" />
        <p className="pl-px text-small text-default-500">
          {t("heresMy")}
          <Spacer x={0.5} isInline />
          <Link href="https://chuyang-fe.github.io/" size="sm" isExternal>
            {t("github")}
          </Link>
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-600">+∞</p>
          <p className=" text-small text-default-500">
            {t("personalInfo.following")}
          </p>
        </div>
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-600">
            {myFollowers}
          </p>
          <p className="text-small text-default-500">
            {t("personalInfo.followers")} {myFollowers === 0 && "😭 👆"}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
