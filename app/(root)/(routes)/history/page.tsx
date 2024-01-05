import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import ChartLine from "@/components/accountProfile/chart-c";
import { currentUser } from "@clerk/nextjs";
import { getGameData } from "@/lib/actions/game.action";
import { getBestUserData } from "@/lib/actions/user.actions";
import CardBestData from "@/components/history/bestData";
import TableData from "@/components/history/tableData";

const HistoryPage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const gameData = await getGameData(user.id);
  const bestUser = await getBestUserData(user.id);
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center gap-10">
        <Card className="flex flex-col w-1/2 justify-center items-center p-5">
          <ChartLine />
        </Card>
        <CardBestData user={bestUser} />
      </div>
      <Table className="mt-10">
        <TableCaption>Load more your history.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Benar</TableHead>
            <TableHead>Salah</TableHead>
            <TableHead>Kecepatan</TableHead>
            <TableHead>Ketelitian</TableHead>
            <TableHead>Keajegan</TableHead>
            <TableHead>Ketahanan</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gameData.map((item, index) => (
            <TableData key={index} dataTable={item} gameId={item.gameId} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryPage;
