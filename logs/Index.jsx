const React = require('react')
const Default = require('../layouts/Default.jsx')
class Index extends React.Component {
  render () {
    const { logs } = this.props
    return (
      <Default title='Logs Index Page'>
        <ul>
          {
                        logs.map((log) => {
                          const { name, color, shipIsBroken, _id } = log
                          return (
                            <li key={_id}>
                              <a href={`/logs/${_id}`}>
                                {name}
                              </a> is {color}
                              <br />
                              {
                                        shipIsBroken
                                          ? 'It\'s broken'
                                          : 'It\'s not broken'
                                    }
                              <br />
                              <form method='POST' action={`/logs/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}
module.exports = Index

