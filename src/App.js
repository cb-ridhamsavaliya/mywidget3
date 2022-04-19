import "./App.css";

function App({ domElement }) {
  const userName = domElement.getAttribute("data-name");
  const userRole = domElement.getAttribute("data-role");
  const userImage = domElement.getAttribute("data-img");
  return (
    <div className="App">
      <div className="card">
        <img
          src={
            userImage
              ? userImage
              : "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>
            <b>{userName}</b>
          </h4>
          <p>{userRole}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
