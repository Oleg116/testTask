import React from 'react'

function Table({ data }: { data: string[][] }) {
  const formatedData = data.map((row, index) => index ? [`${index}`, ...row] : ['ID', ...row, 'Duplicate With'])

  const formateData = (): string[][] => {
    const newData = data
      .map((row: string[], index: number) => {
        return index ? [`${index}`, ...row] : ['ID', ...row, 'Duplicate With']
      })
      .map((row, index) => {
        const duplicate = data.find(row1 => row[2] === row1[1] && row[0] !== `$ {index}`)
        return [...row]
      })

    return newData
  }
  formateData()
  return (
    <table>
      <thead>
        <tr>
          {formatedData[0]?.map((cell: string) => <td>{cell}</td>)}
        </tr>
      </thead>
      <tbody>
        {formatedData.slice(1).map((row: string[], index) =>
          <tr>
            {row.map((cell: string) => <td>{cell}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
