"use client";

import { TableCell, TableRow } from "@/components/ui/table";

import { usePathname, useRouter } from "next/navigation";

interface Props {
  dataTable: {
    correct: number;
    wrong: string;
    panker: string;
    tinker: string;
    janker: string;
    hanker: string;
    date: any;
    time: any;
  };
  gameId: number;
}

const TableData = ({ dataTable, gameId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <TableRow
      className="cursor-pointer"
      onClick={() => onNavigate(`${pathname}/${gameId}`)}
    >
      <TableCell>{dataTable?.correct}</TableCell>
      <TableCell>{dataTable?.wrong}</TableCell>
      <TableCell>{dataTable?.panker}</TableCell>
      <TableCell>{dataTable?.tinker}</TableCell>
      <TableCell>{dataTable?.janker}</TableCell>
      <TableCell>{dataTable?.hanker}</TableCell>
      <TableCell>
        {dataTable?.date} {dataTable?.time}
      </TableCell>
    </TableRow>
  );
};

export default TableData;
