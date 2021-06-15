import React from 'react'

function LoginInput() {
	  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/main/')
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch(console.error);
  }, [setData]);
	return(

		<div>
	asdfl;askfdas;kjㅇㅇㅇ
		
		    <h1>{data && data.email}</h1>
       {data && data.password}</div>
		)
}


export default LoginInput;