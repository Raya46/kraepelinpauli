import ChartLine from "@/components/accountProfile/chart-c";
import CardDetailData from "@/components/history/detailData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dataForChartDetail, getDetailData } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

interface pageProps {
  params: { id: number };
}

export default async function Page({ params }: pageProps) {
  const user = await currentUser();
  if (!user) return null;

  const detailUser = await getDetailData(params.id);
  const dataChartDetail = await dataForChartDetail(params.id);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div className="w-full flex flex-col items-center justify-center mt-7 ">
          <Card className="w-full lg:w-1/2 flex flex-col justify-center items-center p-5 ">
            <ChartLine dataGame={dataChartDetail} />
          </Card>
        </div>
        <div className="mt-7 flex flex-col">
          <CardDetailData user={detailUser} />
        </div>
        <Button className="max-w-[10rem] mt-4">
        <Link href="/history" className="w-full">back</Link>
        </Button>
      </div>
    </div>
  );
}
