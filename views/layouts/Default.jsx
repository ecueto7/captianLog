const React = require('react')
class Default extends React.Component {
  render () {
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>Captains log</title>
        </head>
        <body>
          <nav>
            <a href='/logs'>Go to Home Page For Logs</a>
            <a href='/logs/new'>Create a New Log</a>
          </nav>
          <h1>
            {this.props.title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}
module.exports = Default