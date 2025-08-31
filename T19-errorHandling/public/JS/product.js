const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log("form submitted");

    const productName=document.getElementById("product").value;

    const obj={
      name:productName
    }

    axios.post("http://localhost:3020/products",obj).then((res)=>{
      console.log("Value returned in Post : "+ res.data.value);

    })
}