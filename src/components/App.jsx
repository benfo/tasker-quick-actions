import { h, Component } from "preact";
import config from "../config";
import taskerService from "../tasker/taskerService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  componentDidMount() {
    this.setState({
      active: taskerService.getDnd() === "priority"
    });
  }

  onToggleClick = () => {
    var isActive = !this.state.active;
    this.setState({ active: isActive });
    taskerService.setDnd(isActive ? "priority" : "all");
  };

  handleToggleChange = event => {
    let active = event.target.checked;
    this.setState({ active });
    taskerService.setDnd(active ? "priority" : "all");
  };

  onUnplugClick = () => {
    taskerService.performTask("Unplug", 1);
  };

  onCloseClick = () => {
    taskerService.destroyScene(config.dndSceneName);
  };

  render() {
    return (
      <div className="app-content bg-white">
        <div className="panel">
          <div className="panel-header text-center">
            <div className="panel-title h5 mt-1">Quick Settings</div>
          </div>
          <div className="panel-body">
            <div className="tile tile-centered">
              <div className="tile-content">
                <div className="tile-title text-bold">Do not disturb</div>
                <div className="tile-subtitle">Toggle DND on and off</div>
              </div>
              <div className="tile-action">
                <label class="form-switch">
                  <input
                    type="checkbox"
                    checked={this.state.active}
                    onChange={this.handleToggleChange}
                  />
                  <i class="form-icon"></i>
                </label>
              </div>
            </div>
            <div className="divider"></div>
            <div className="tile tile-centered">
              <div className="tile-content">
                <div className="tile-title text-bold">Pull the plug</div>
                <div className="tile-subtitle">Switch off Wifi, BT</div>
              </div>
              <div className="tile-action">
                <button
                  className="btn btn-primary"
                  onClick={this.onUnplugClick}
                >
                  Unplug
                </button>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <button
              className="btn btn-primary btn-block"
              onClick={this.onCloseClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
