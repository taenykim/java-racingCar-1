import React from 'react'

const Processes = ({ processes }) => {
  return <>{processes && processes.map((process, i) => <div key={i}>{process}</div>)}</>
}

export default Processes
