import React from 'react'

//function InputExample() {
//    const [name, setName] = React.useState("");

//    const onChangeName = (e) => {
//        setName(e.target.value);
//    }
//  return (
//    <div>
//      Hello! Please Enter Your Name: <br/> <input type="text" value={name} onChange={onChangeName} />
//        <br/>
//        {`Hello ${name}!`}
//    </div>
//  );
//}

function InputExample() {
    const [form, setForm] = React.useState({name: "", surname: ""});

    const onChangeForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    return (
        <div>
            Hello! Please Enter Your Name: <br/>
            <input type="text" name="name" value={form.name} onChange={onChangeForm}/> <br/> <br/>
            Surname: <br/>
            <input type="text" name="surname" value={form.surname} onChange={onChangeForm} />

            <br/>
            {`Hello ${form.name} ${form.surname}!`}
        </div>
    );
}

export default InputExample;
