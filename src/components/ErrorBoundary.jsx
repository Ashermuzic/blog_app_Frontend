import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can customize the fallback UI here
      return (
        <div style={{ color: "red", textAlign: "center" }}>
          <h2>Oops! Something went wrong.</h2>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
