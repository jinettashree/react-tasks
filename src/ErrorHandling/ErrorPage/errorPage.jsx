import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./errorFallback";

const Crash = () => {
  throw new Error("Unknown error occured");
};
const ErrorPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <h1>Hello User</h1>
        <Crash/>
    </ErrorBoundary>
  );
};

export default ErrorPage;
