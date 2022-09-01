import React from 'react'
const names=['Relative name','Relative name','Relative name','Relative name']
const NameList = () => {
    // const names=['Relative1','Relative2','Relative3','Relative4']
    const nameList=names.map((name,i)=><li key={name.split(' ').splice(0,1).toString().toLowerCase()+"list"+(i+1)}>{name+(i+1)}</li>)
    console.log(nameList)
  return (
    <div><ol>Relative List{nameList}</ol></div>
    
  )
}

export default NameList