'use client';

import React, { Component, ErrorInfo, ReactNode } from "react";
import GlobalError from "../app/global-error"; // Adjusted the path

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <GlobalError error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
