const React = require('react')
class Show extends React.Component {
  render () {
    const { name, color, shipIsBroken, _id } = this.props.log
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <>
        <h1> {capName} Show Page </h1>
        <nav>
          <a href='/logs'>Back To Logs Home</a>
          <a href={`/logs/${_id}/edit`}>{`Edit the ${capName}`}</a>
        </nav>
        <p>{capName} is {color} and {shipIsBroken ? 'it\'s broken' : 'it\'s not Broken'}</p>
      </>
    )
  }
}
module.exports = Show