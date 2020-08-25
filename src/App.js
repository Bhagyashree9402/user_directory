import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import DropDownButtons from "./components/DropDownButtons";
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
            gender: selectEmp.gender,
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

  const [gendersearch, setGenderSearch] = useState({
    gender: "",
  });

  const genSearch = (e) => {
    
    setGenderSearch({ ...gendersearch, gender: e.target.value });    
  };

  //state definition for employee
  const [employee, setEmp] = useState(employeeArray)

  const simEmp = employee.filter(function (emp) {
    if (search.name.length < 0) {
      return employee
    } else if (emp.name.includes(search.name)) {
      return emp
    }
  });

  const empGender= employee.filter(function (emp) {
    if (gendersearch.gender.length < 0) {
      
      return employee
    } else if (emp.gender.startsWith(gendersearch.gender)){
      console.log(emp.gender+gendersearch.gender);
      return emp
    } 
  });
  
  return (
    <div className="App">
     <Header/>
     <Search empSearch={empSearch}/>
     <div className="container">
     <h5 className="text">Filter By Gender</h5>
     <div className="FilterOptions">
    
     <DropDownButtons text="male" value="male" genSearch={() => {
                                                 const empGender = employee.filter(function (emp) {
                                                   if (emp.gender.startsWith('male')){
                                                     return emp
                                                   }
                                                });
                                                 setEmp([...empGender])
                                                }}/>
     <DropDownButtons text="female" value="female" genSearch={() => {
                                                 const empGender = employee.filter(function (emp) {
                                                   if (emp.gender.startsWith('female')){
                                                     return emp
                                                   }
                                                });
                                                 setEmp([...empGender])
                                                }}/>
     <DropDownButtons text="Refresh" value="" genSearch={() => window.location.reload(false)} />
     </div>
     </div>

     <table className="table mx-auto">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
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
