import { useDropzone } from 'react-dropzone';
import { useState, useEffect, useMemo } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const dropZoneStyle = {
  innerBox: `flex flex-col items-center`,
  uploadIcon: `mb-[0.5rem]`
};

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1rem',
  overflow: 'hidden',
  background: '#23262F',
  height: '100%',
  cursor: 'pointer',
  color: '#777E90',
  fontSize: '0.75rem'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const DropZone = ({ files, setFiles }) => {
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    maxSize: 1e8,
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': [],
      'image/jpg': []
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
    }
  });

  const filesToShow = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div className={dropZoneStyle.innerBox}>
          <UploadFileIcon className={dropZoneStyle.uploadIcon} />
          <p>Drag &quot;and&quot; drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{filesToShow}</ul>
        </aside>
      </div>
    </>
  );
};

export default DropZone;
