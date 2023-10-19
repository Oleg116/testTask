import React, { useState } from 'react'
import './App.css'
import Table from './components/table/index'
import GetFilesButton from './components/getFileButton';

function App() {
  const [data, setData] = useState<string[][]>([])
  return (
    <div>
      <Table data={data} />
      <GetFilesButton setFileData={setData} />
    </div>
  );
}

export default App;
