import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./errorFallback";

const ErrorPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h1>Hello User</h1>
        <ErrorFallback/>
    </ErrorBoundary>
  );
};

export default ErrorPage;
