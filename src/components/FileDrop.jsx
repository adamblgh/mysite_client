import React,{useState} from 'react'
import { FileUploader } from "react-drag-drop-files"

const fileTypes = ["JPEG","JPG", "PNG", "GIF"];

export const FileDrop=({setSelFile})=> {
    const [file, setFile] = useState(null);

    const handleChange = (file) => {
      setFile(file);
      setSelFile(file)
    };
    return (
      <div className="filedrop-holder">
        <h3>Drag & Drop Your Avatar</h3>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          maxSize="1"
        />
        <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
      </div>
    );
}
