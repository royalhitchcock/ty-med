import { useAppSelector } from "../../app/hooks"
import React from "react";
import { PatientInfo } from "../dashboard/Dashboard";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getGridRowElement, getRowEl } from "@mui/x-data-grid/utils/domUtils";

export default function patientList({handleClick}) {

    let data = useAppSelector((state) => state.patient.patientArray);
    const row = 0;
    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', type: 'number', width: 70 },
        { field: 'name', headerName: 'NAME', width: 130 },
        { field: 'username', headerName: 'USER NAME', width: 130 },
        { field: 'email', headerName: 'EMAIL', width: 90 },
      ];

    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                //checkboxSelection
                onCellClick={(row)=> handleClick(row.id)}
            />
    </div>
    );
}

/*

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Patient</TableCell>
                        <TableCell align="right">NAME</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">CITY</TableCell>
                        <TableCell align="right">PHONE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id} ></TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>)





    const squares = (
        <ul>
          {data.map((value) => (
            <li key={value.id}>Hey {value.name}</li>
          ))}
        </ul>
      );
    return (
        <div>{squares}</div>
    )

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

const columns = [
    {
        header: "ID",
        accessorKey: 'id',
    },
    {
        header: "Name",
        accessorKey: 'name',
    },
    {
        header: "Age",
        accessorKey: 'unitPrice',
    },
    {
        header: "High Risk",
        accessorKey: 'soldOut',
    },
]

function PatientList({handleClick}) {

    const data = useSelector((state) => state.patient.patientArray);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <span className='overflow-auto relative max-h-[100] my-8'>
            <table className="y-3 border border-stone-500 my-8 ml-16 mr-32">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} >
                            {headerGroup.headers.map((header) => 
                                <th key={header.id} className="y-3 border border-stone-500 text-center p-2">
                                    {flexRender(header.column.columnDef.header, header.getContext())}       
                                </th>
                            )}
                        </tr>
                    ))}
                </thead>
                <tbody>    
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} onClick={() => handleClick(row.id)} className='hover:bg-slate-400'>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="p-3 border border-stone-500 text-center">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </span>
    );
}
*/
//export default PatientList;