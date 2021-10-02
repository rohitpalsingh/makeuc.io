import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    font: 'Press Start 2P'
  }
});

function createData(name, start, end) {
  return { name, start, end };
}

const generalRows = [
  createData("Resume Review Workshop", "Oct 4 - 5:00PM", "Oct 4 - 5:45 PM"),
  createData("Student Networking Icebreaker", "Oct 5 - 7:00PM", "Oct 5 - 7:45 PM"),
  createData("Intro to Website Design with Command Tech", "Oct 6 - 7:00PM", "Oct 6 - 7:45PM"),
  createData("IEEE MakeUC General Preparation", "Oct 7 - 5:00PM", "Oct 7 - 6:00PM"),
  createData("Intro to Program Management with Microsoft", "Oct 7 - 7:00PM", "Oct 7 - 8:00PM"),
  createData("Fun With scribbl.io", "Oct 8 - 6:00PM", "Oct 8 - 7:00PM")
];

export default function BasicTable() {
  return (
    <div>
      <TableContainer className="schedule-bg" component={Paper}>
        <Table className='schedule-table' aria-label="simple table">
          <TableHead className="schedule-gray-row">
            <TableRow>
              <TableCell align="center" className="schedule-name"><span
                className="font-primary b">Event</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span
                className="font-primary b">Start Time (EDT)</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span
                className="font-primary b">End Time (EDT)</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {generalRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" className="schedule-name" component="th" scope="row">
                  <span className="b">{row.name}</span>
                </TableCell>
                {/* at this point, I'm pretty sure you know I'm not a web person, but who cares, I'm doing this anyways */}
                <TableCell align="center" className="schedule-date-time" style={{fontWeight: "500", color: "#5a4ecb"}}>{row.start}</TableCell>
                <TableCell align="center" className="schedule-date-time" style={{fontWeight: "500", color: "#5a4ecb"}}>{row.end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}