import React from 'react'

const Processes = ({ processes }: { processes: any }) => {
  return (
    <>{processes && processes.map((process: any, i: number) => <div key={i}>{process}</div>)}</>
  )
}

export default Processes
