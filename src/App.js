import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  tablebox: {
    minWidth: 1080
  }
};
const customers=[
  {
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김동녕',
  'birthday' : '960309',
  'gender' : '남성',
  'job' : '대학생'
  },
  {
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김윈터',
  'birthday' : '030819',
  'gender' : '여성',
  'job' : '가수'
  },
  {
  'id' : '3',
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '카리나',
  'birthday' : '000219',
  'gender' : '여성',
  'job' : '디자이너'
  }
]
class App extends Component {
  render(){
    const {classes} = this.props;
    return (
            <Paper className={classes.root}>
              <Table className={classes.tablebox}>
                <TableHead>
                  <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(c=>{
                      return(
                        <Customer 
                        key= {c.id}
                        id={c.id}
                        image= {c.image}
                        name= {c.name}
                        birthday= {c.birthday}
                        gender= {c.gender}
                        job= {c.job}
                      />
                      )
                    })}
                </TableBody>
              </Table> 
            </Paper>
        )
      }
    }
export default withStyles(styles)(App);
