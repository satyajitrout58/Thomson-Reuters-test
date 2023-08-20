import React from "react";

const ErrorBoundery = (MainComponent) => {
  return class ErrorBounderyComponet extends React.Component {
    constructor() {
      super();
      this.state = {
        hasError: false,
        error: null
      };
    }
    static getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
    render() {
      return (
        <>
          {this.state.hasError ? (
            <div>ERROR PLEASE TRY AGAIN AFTER SOME TIME</div>
          ) : (
            <MainComponent />
          )}
        </>
      );
    }
  };
};
export default ErrorBoundery;
