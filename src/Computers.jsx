import React from 'react'
import { getComputers } from './services/StealthbitsService'
import Table from './Table'

const comonscol = [
    { title: "Name", field: "displayname" },
    { title: "DNS Hostname", field: "dnsHostName" },
    { title: "IP", field: "ipAddress" },
    { title: "OS", field: "os" },
    { title: "OS Version", field: "osVersion" },
  ];

export function Computers() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
      async function fetchData() {
          const computers = await getComputers()
      
          setData(computers.map(computer => ({
            ...computer,
            href: `/computers/${computer.id}`
        })))
      
          // TODO handle error case
      }

      fetchData()
  }, [])

  return (
    <div className="app">
        <Table
            title="Computers"
            col={comonscol}
            data={data}
        />
    </div>
  );
}