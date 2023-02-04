import { useState } from "react";

function State() {
    const [name, setName] = useState("John");
    const [surname, setSurname] = useState("Doe");
    const [age, setAge] = useState(18);
	const [friends, setFriends] = useState(["Jane", "Jack", "Joe"]);

    //console.log(name, surname, age);
  
    return (
		<div>
			<h1>Merhaba {name} {surname} </h1>
			<h2>Yaşınız: {age} </h2>
			<button onClick={() => setName("Jane")}>Change Name </button>
			<button onClick={() => setSurname("Smith")}>Change Surname </button>
			<button onClick={() => setAge(25)}>Change Age </button>
			<br/><br/>
			<h2>Friends</h2>
			{friends.map((friend, index) => (
				<div key={index}> {friend} </div>
			))}

			<br/>
			<button onClick={() => setFriends([...friends, "Mary"])}>Add Marry to Friends List </button>
			<br/>
			<br/>

		</div>
  );
}

export default State;
