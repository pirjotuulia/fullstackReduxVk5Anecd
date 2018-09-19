import React from 'react';


class App extends React.Component {
  state = {
    anecdote: ''
  }

  klik = (nappi) => () => {
    this.props.store.dispatch({ type: 'vote', vote: nappi })
  }

  handleInputChange = (event) => {
    this.setState({ anecdote: event.target.value })
  }

  addAnecdote = (event) => {
    event.preventDefault()
    let text = this.state.anecdote
    this.setState({ anecdote: '' })
    if (text !== '') {
      this.props.store.dispatch({ type: 'new', anecdote: text })
    }
  }

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button defaultValue={this.state.anecdote} onClick={this.klik(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input onChange={this.handleInputChange} /></div>
          <button onClick={this.addAnecdote}>create</button>
        </form>
      </div>
    )
  }
}

export default App