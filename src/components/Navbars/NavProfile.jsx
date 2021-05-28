import profilePic from "../../assets/images/profile-pic.png";

function NavProfile() {
    return (
        <>
            <button className="h-8 w-8 rounded-md focus:outline-none">
                <img className="h-8 w-8 rounded"
                    src={profilePic}
                    alt="Profile"
                />
            </button>
        </>
    )
}

export default NavProfile;
