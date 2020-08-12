import React from 'react'
import { getUsers } from './services/StealthbitsService'
import Table from './Table'

const comonscol = [
    { title: "Name", field: "displayname" },
    { title: "Email", field: "email" },
    { title: "Last Logon", field: "lastLogon", type: "datetime" },
    { title: "Domain", field: "domain" },
    { title: "Department", field: "department" },
    { title: "Title", field: "title" },
  ];

export function Users() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
      async function fetchData() {
          const users = await getUsers()
      
          setData(users.map(user => ({
              ...user,
              href: `/users/${user.id}`
          })))
      
          // TODO handle error case
      }

      fetchData()
  }, [])

  return (
    <div className="App">
        <Table
            title="Users"
            col={comonscol}
            data={data}
        />
    </div>
  );
}