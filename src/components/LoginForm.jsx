import PropTypes from 'prop-types'

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
        ></input>
        <div>
            password
          <input
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <button type="submit">login</button>
      </div>
    </form>
  )
}

LoginForm.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm