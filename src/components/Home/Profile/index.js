import "./index.scss";
import profile from "../../../assets/images/profile.jpg";

const Profile = () => {
   

        
    return (
        <div className="profile-container">
            <figure>
            <img className="hover-img" src={profile} alt='k'/>
            </figure>
        </div>
    );
};

export default Profile;
