import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/84334845_2709290712459828_345296666015825920_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lFA_FXEIw1UAX_Wjo9K&_nc_ht=scontent-sea1-1.xx&oh=715de0e3816a55b4bda83896e3b6e583&oe=60EAB94A"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Tuan Phan" name="name" />
          <label>Email</label>
          <input
            type="email"
            placeholder="anhtuan230595@gmail.com"
            name="email"
          />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
