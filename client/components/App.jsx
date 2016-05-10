// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Counters collection and puts them on this.data.counters
  getMeteorData() {
    return {
      counters: Counters.find({}, {sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.user(),
      errorMessage: Counters.simpleSchema().namedContext().keyErrorMessage('name')
    }
  },

  renderCounters() {
    // Get counters from this.data.counters
    return this.data.counters.map((counter) => {
      const currentUserId = this.data.currentUser && this.data.currentUser._id;

      return <Counter
        key={counter._id}
        counter={counter} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    // Find the name field via the React ref
    var name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    Counters.insert({ name: name }, function(error, result) {
      if (result) {
        $('.modal').addClass('hidden');
      }
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },

  showModal() {
    // $('.modal').removeClass('hidden');
    // $('.new-counter input').focus();
    $('.modal').removeClass('hidden').find('.new-counter input').focus();
  },

  closeModal() {
    $('.modal').addClass('hidden');
  },

  render() {
    return (
      <div className="container">
        <header>
          <AccountsUIWrapper />
          { this.data.currentUser ?
            <a className="add-counter" onClick={this.showModal}>+</a> : ''
          }
        </header>

        { this.data.currentUser ?
          <div className="modal hidden">
            <a className="close" onClick={this.closeModal}>&times;</a>
            <div className="content">
              Add counter
              <form className="new-counter" onSubmit={this.handleSubmit} >
                <input
                  type="text"
                  ref="textInput"
                  placeholder="e.g. Tea" />
                <span className="error">{ this.data.errorMessage }</span>
              </form>
            </div>
          </div> : ''
        }

        { this.data.currentUser ?
          <div className="pure-g gutter">
            {this.renderCounters()}
          </div> : ''
        }
      </div>
    );
  }
});
