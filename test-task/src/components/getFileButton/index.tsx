import React from 'react'

function GetFilesButton({ setFileData }: { setFileData: (param: string[][]) => void }) {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        const response = await fetch(fileUrl);
        const text = await response.text();
        const lines = text.split("\n");

        const data = lines.map((line) => line.split(";"))


        setFileData(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <input type="file" onChange={handleFileChange} />
  );
}

export default GetFilesButton;
