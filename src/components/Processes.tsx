import React from 'react'

const Processes = ({ processes }: { processes: null | JSX.Element[] }) => {
  return (
    <>
      {processes &&
        processes.map((process: JSX.Element, i: number) => <div key={i}>{process}</div>)}
    </>
  )
}

export default Processes
