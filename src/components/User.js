import PropTypes from "prop-types";

//function User(props) {
function User({name, surname, isLoggedIn, age, friends, adress}) {
    //console.log(props);
    if(!isLoggedIn) {
        return <h1>Giriş Yapmadınız </h1>
    }

    return (
        <>
        <h1>
            {/*{
                props.isLoggedIn
                ? `Hello! My name is ${props.name} ${props.surname} and I am ${props.age} years old.`
                : "You are not logged in!"
            }*/
            isLoggedIn
            ? `Hello! My name is ${name} ${surname} and I am ${age} years old.`
            : "You are not logged in!"
            }
        </h1>
        
        {adress.title} {adress.zip}
        {<p>---------------------------------------------</p>}
        {friends.map((friend, index) => (
            <div key={index}>
                {index} - {friend.name} {"---"} {friend.surname} 
            </div>
        ))}

        {
            <p>---------------------------------</p>
        }

        {
            friends.map((friend) => (
                <div key={friend.id}> {friend.name} {"---"} {friend.surname} </div>
            ))
        }

        </>
    );
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    name: "John",
    surname: "Doe",
    isLoggedIn: false,
    age: 18,
};

export default User;
