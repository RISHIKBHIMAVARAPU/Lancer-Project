import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import axios from "axios";

function createData(name, accountId, date, status) {
  return { name, accountId, date, status };
}

async function func() 
{
  const users = await axios.get(`http://localhost:4000/users`)
  console.log(users.data)
  // console.log(users)
  const row = [
    // [1, users.data[0].fullname, users.data[0].id, "Active"],
    // createData(),
    createData(1, "Raju", "2", "Active"),
    createData(2, "Kareem", "2", "Blocked"),
    createData(3, "Bijoy", "2", "Active"),
    createData(4, "ChandraSekhar", "2", "Deactivated"),
  ];
  return row;
} 

// const rows = func()
const rows = [
  // [1, users.data[0].fullname, users.data[0].id, "Active"],
  // createData(),
  createData(1, "Raju", "2", "Active"),
  createData(2, "Kareem", "2", "Blocked"),
  createData(3, "Bijoy", "2", "Active"),
  createData(4, "ChandraSekhar", "2", "Deactivated"),
];

const makeStyle=(status)=>{
  if(status === 'Active')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Blocked')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {

  const [us,setus] = React.useState([])
  const numbers = []
  React.useEffect(() => {
    func();
  },[])
  async function func() 
  {
    const users = await axios.get(`http://localhost:4000/users`)
    console.log(users.data)
    setus(users.data)
    for(let i=0;i<users.data.length;i++)
    {
      let num = Math.floor((Math.random() * 10) + 1);
      numbers[i] = num;
    }
  } 
  return (
      <div className="Table">
      <br></br>
      {/* <br></br>
      <br></br>
      <br></br> */}
      {/* <h3>Recent Orders</h3> */}
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="left">Username</TableCell>
                <TableCell align="left">Services Posted</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {us.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="left">{user.fullname}</TableCell>
                  <TableCell align="left">2</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle("Active")}>{"Active"}</span>
                  </TableCell>
                  {/* <TableCell align="left" className="Details">Details</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}