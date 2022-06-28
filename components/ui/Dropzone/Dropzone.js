import { useDropzone } from 'react-dropzone';
import { useState, useEffect, useMemo } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Button } from '@mui/material';

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

const DropZone = ({
  files,
  setFiles,
  customStyle,
  className,
  dropZoneInnerBox,
  dropZoneUploadIcon,
  showSaveButton = false,
  styleSaveButton,
  handleSaveBtn
}) => {
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
      ...customStyle,
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
      <div {...getRootProps({ style })} className={className}>
        <input {...getInputProps()} />
        <div className={dropZoneInnerBox}>
          <UploadFileIcon className={dropZoneUploadIcon} />
          <p>Drag and drop some files here, or click to select files</p>
        </div>
        <aside>
          <ul>{filesToShow}</ul>
        </aside>
      </div>
      {showSaveButton && (
        <Button onClick={(e) => handleSaveBtn(e)} className={styleSaveButton}>
          Save photo
        </Button>
      )}
    </>
  );
};

export default DropZone;
