import React from 'react'

function UploadFile ({ setFieldValue, ...rest }) {
  const handleOnChange = (e) => {
    if (e.currentTarget.files) {
      setFieldValue(rest.field.name, e.currentTarget.files[0])
    }
  }

  return (
    <div>
      <input
        {...rest}
        type="file"
        name={rest.field.name}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default UploadFile
