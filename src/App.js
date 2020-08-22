import React, { useState, useEffect } from "react";
import "./App.css";
import EmpDirectory from "./components/EmpDirectory";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";

function App() { 
  
  let employeeArray = [];

  useEffect(() => {
    getEmp();
  }, [])

 //api request using axios

  const getEmp = () => {

    axios.get("https://randomuser.me/api/?results=10&nat=us")
      .then((res) => {
        let employees = res.data.results
        employees.forEach((selectEmp) => {

          employeeArray.push({
            name: selectEmp.name.first + " " + selectEmp.name.last,
            age: selectEmp.dob.age,
            email: selectEmp.email,
            picture: selectEmp.picture.thumbnail,
            country:selectEmp.location.country
          })
        })
        setEmp([...employeeArray])
      })
      .catch((err) => console.log(err))
  }

  const [search, setSearch] = useState({
    name: "",
  });

  const empSearch = (e) => {
    setSearch({ ...search, name: e.target.value });
  };

  const [employee, setEmp] = useState(employeeArray)

  const simEmp = employee.filter(function (emp) {
    if (search.name.length < 0) {
      return employee
    } else if (emp.name.includes(search.name)) {
      return emp
    }
  });
  return (
    <div className="App">
     <Header/>
     <Search empSearch={empSearch}/>

     <table className="table mx-auto">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody >

          {simEmp.map((employee, id) => (
            <Table key={id}>
              {employee}
            </Table>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
