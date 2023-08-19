import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChartLine from "@/components/accountProfile/chart-c";

const HistoryPage = () => {
  return (
    <div className="container mx-auto">
      <Card>
        <CardHeader>
          <ChartLine />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="flex flex-row gap-2">
              <CardDescription>total benar:</CardDescription>
              <CardTitle>47</CardTitle>
              <CardDescription>total salah:</CardDescription>
              <CardTitle>1</CardTitle>
            </div>
            <div className="flex flex-col">
              <CardDescription>Kecepatan Kerja (PANKER):</CardDescription>
              <CardTitle> 60.0 (Sedang)</CardTitle>
              <CardDescription>Ketelitian Kerja (TINKER):</CardDescription>
              <CardTitle>95.0 (Tinggi Sekali)</CardTitle>
              <CardDescription>Keajegan Kerja (JANKER):</CardDescription>
              <CardTitle>95.0 (Tinggi Sekali)</CardTitle>
              <CardDescription>Ketahanan Kerja (HANKER):</CardDescription>
              <CardTitle>77.5 (Tinggi)</CardTitle>
            </div>
          </div>
        </CardContent>
      </Card>
      <Table className="mt-6">
        <TableCaption>Load more your history.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Benar</TableHead>
            <TableHead>Salah</TableHead>
            <TableHead>Kecepatan</TableHead>
            <TableHead>Ketelitian</TableHead>
            <TableHead>Keajegan</TableHead>
            <TableHead>Ketahanan</TableHead>
            <TableHead>More</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>47</TableCell>
            <TableCell>1</TableCell>
            <TableCell>60.0 (Sedang)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>77.5 (Tinggi)</TableCell>
            <TableCell className="flex gap-2">
              <span>chart</span>
              <span>time</span>
            </TableCell>
            <TableCell>25 Oct 2022 15:57</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>47</TableCell>
            <TableCell>1</TableCell>
            <TableCell>60.0 (Sedang)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>77.5 (Tinggi)</TableCell>
            <TableCell className="flex gap-2">
              <span>chart</span>
              <span>time</span>
            </TableCell>
            <TableCell>25 Oct 2022 15:57</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>47</TableCell>
            <TableCell>1</TableCell>
            <TableCell>60.0 (Sedang)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>77.5 (Tinggi)</TableCell>
            <TableCell className="flex gap-2">
              <span>chart</span>
              <span>time</span>
            </TableCell>
            <TableCell>25 Oct 2022 15:57</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>47</TableCell>
            <TableCell>1</TableCell>
            <TableCell>60.0 (Sedang)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>77.5 (Tinggi)</TableCell>
            <TableCell className="flex gap-2">
              <span>chart</span>
              <span>time</span>
            </TableCell>
            <TableCell>25 Oct 2022 15:57</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>47</TableCell>
            <TableCell>1</TableCell>
            <TableCell>60.0 (Sedang)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>77.5 (Tinggi)</TableCell>
            <TableCell className="flex gap-2">
              <span>chart</span>
              <span>time</span>
            </TableCell>
            <TableCell>25 Oct 2022 15:57</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>47</TableCell>
            <TableCell>1</TableCell>
            <TableCell>60.0 (Sedang)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>95.0 (Tinggi sekali)</TableCell>
            <TableCell>77.5 (Tinggi)</TableCell>
            <TableCell className="flex gap-2">
              <span>chart</span>
              <span>time</span>
            </TableCell>
            <TableCell>25 Oct 2022 15:57</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryPage;
