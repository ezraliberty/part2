import propTypes from 'prop-types'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
          username
        <input
          value={username}
          onChange={handleUsernameChange}
          id='username'
        ></input>
        <div>
            password
          <input
            value={password}
            type="password"
            onChange={handlePasswordChange}
            id='password'
          ></input>
        </div>
        <button id="login-button" type="submit">login</button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleUsernameChange: propTypes.func.isRequired,
  handlePasswordChange: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired
}

export default LoginForm