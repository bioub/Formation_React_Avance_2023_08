import Profile from "./Profile";

function mapStateToProps(state) {
    return {
      name: state.name,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onUpdate(name) {
        dispatch({
          type: 'UPDATE_USER',
          payload: {
            name,
          },
        });
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  