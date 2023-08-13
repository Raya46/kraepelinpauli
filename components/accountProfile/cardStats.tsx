import { Card } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";

interface Props {
  user: {
    id: string;
    objectId: string;
    correct: number;
    wrong: number;
    PANKER: number;
    TINKER: number;
    JANKER: number;
    HANKER: number;
  };
}

const CardStats = ({ user }: Props) => {
  return (
    <div className="flex flex-row w-full justify-between gap-4">
      <Card className="p-6 w-full">
        <div className="flex flex-row gap-4 justify-center">
          <div className="flex flex-col gap-4 items-center">
            <CardDescription>Kecepatan Kerja</CardDescription>
            <CardTitle>{user?.PANKER}</CardTitle>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <CardDescription>Ketelitian Kerja</CardDescription>
            <CardTitle>{user?.TINKER}</CardTitle>
          </div>
        </div>
      </Card>
      <Card className="p-6 w-full">
        <div className="flex flex-row gap-4 justify-center ">
          <div className="flex flex-col gap-4 items-center">
            <CardDescription>Total Benar</CardDescription>
            <CardTitle>{user?.correct}</CardTitle>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <CardDescription>Total Salah</CardDescription>
            <CardTitle>{user?.wrong}</CardTitle>
          </div>
        </div>
      </Card>
      <Card className="p-6 w-full">
        <div className="flex flex-row gap-4 justify-center ">
          <div className="flex flex-col gap-4 items-center">
            <CardDescription>Keajegan Kerja</CardDescription>
            <CardTitle>{user?.JANKER}</CardTitle>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <CardDescription>Ketelitian Kerja</CardDescription>
            <CardTitle>{user?.HANKER}</CardTitle>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardStats;
