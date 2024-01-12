import ChartLine from "@/components/accountProfile/chart-c";
import CardDetailData from "@/components/history/detailData";
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
        <div className="w-full items-center justify-center mt-7 flex sm:flex-col md:flex-col lg:flex-row">
          <Card className="w-1/2 justify-center items-center p-5 flex sm:flex-col md:flex-col lg:flex-row">
            <ChartLine dataGame={dataChartDetail} />
          </Card>
        </div>
        <div className="mt-7 flex sm:flex-col md:flex-col lg:flex-row">
          <CardDetailData user={detailUser} />
        </div>
        <Link href="/history">back</Link>
      </div>
    </div>
  );
}
