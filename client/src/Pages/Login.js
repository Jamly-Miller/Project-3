import React from "react";
import "../Pages/login.css";

Class; LoginForm; Extends; React.Component; {
  constructor(props); {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false
    }
  }
}

setInputValue(property,  val); {
  val = val.trim();
  if (val.length > 12) {
    return;
  }
  this.setState({
    [property]: val
  })
}

resetForm(); {
  this.setState({
    username: "",
    password: "",
    buttonDisabled: false
  })
}

async doLogin(); {

  if (!this.state.username) {
    return;
  }
  if(!this.state.password) {
    return;
  }
  this.setState({
    buttonDisabled: ture
  })
  try {
    let res = await fetch("/login", {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password:this.state.password,
      })
    });
    let sesult = await res.json();
    if (result && result.success) {
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    }
    else if (result && result.success === false) {
      this.resetForm();
      alert(result.msg);
    }

  }
  catch(e) {
    console.log(e);
    this.resetForm();

  }
}


render() => {
  return (
    <div classname="loginForm">
      Login Form
      <InputField
         type="text"
         placeholder="Username"
         value={this.state.username ? this.state.username : ""}
         onChange={ (val) => this.setInputValue("username", val) }
      />

      <InputField
         type="password"
         placeholder="Password"
         value={this.state.password ? this.state.password : ""}
         onChange={ (val) => this.setInputValue("password", val) }
      />

      <SubmitButton
         text="Login"
         disabled={this.staet.buttonDisabled}
         onClick=
         { () => this.doLogin}
      />

    </div>
  );
};

export default Login;