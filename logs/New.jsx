const React = require('react')
class New extends React.Component {
  render () {
    return (
      <>
        <h1>Create A New Log</h1>
        <nav>
          <a href='/logs'> Go Back To Logs Home Page</a>
        </nav>
        <form method='POST' action='/logs'>
          Name: <input type='text' name='name' placeholder='Name of Log Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Log Here' /><br />
          Ship is Broken: <input type='checkbox' name='shipIsBroken' /><br />
          <input type='submit' value='Submit Log' />
        </form>
      </>
    )
  }
}
module.exports = New