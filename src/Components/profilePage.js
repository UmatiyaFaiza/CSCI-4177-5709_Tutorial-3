import { useLocation } from "react-router-dom";

// https://reactrouter.com/en/main/hooks/use-navigate

function ProfilePage(props) {

    const location = useLocation()

    const profileData = location.state;
    console.log("Inside profile page====>", JSON.stringify(profileData));


    return (
        <div>
            <div>
                <h1>Profile Page</h1>
            </div>
            <div className='form'>
                <div className='form-body'>
                    <form>
                        <div>
                            <label className="form__label" htmlFor="firstName"><b>First Name:</b>   {profileData.firstName}</label>

                        </div>
                        <div>
                            <label className="form__label" htmlFor="lastName"><b>Last Name:</b>   {profileData.lastName}</label>

                        </div>
                        <div>
                            <label className="form__label" htmlFor="email"><b>Email:</b>  {profileData.email}</label>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default ProfilePage;

