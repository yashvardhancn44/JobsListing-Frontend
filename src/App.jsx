const App = () => {
  const name = "yash";
  const names = ["yash", "hema", "sanki", "zak"];
  const loggedIn = true;

  // if (loggedIn) {
  //   return <h1>Hello Render</h1>;
  // } // since we cant write an if statement like this inside return. Everything has to be a single line expression.
  // usually we want the conditionals inside.

  const styles = {
    color: "red",
    fontSize: "52px",
  };

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{ color: "red", fontSize: "24px" }}>Hello {name}</p>
      <p style={styles}>{name + "vardhan" + 44}</p>
      <p style={{ fontFamily: "Arial", fontSize: "40px" }}>
        {name + "vardhan" + 44}
      </p>

      <ul>
        {/* {loggedIn ? <h1>Hello Member</h1> : <h1>hello Guest</h1>} */}
        {/* {loggedIn ? <h1>Hello Member</h1> : ""} */}
        {loggedIn && <h1>Hello Member</h1>}
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
