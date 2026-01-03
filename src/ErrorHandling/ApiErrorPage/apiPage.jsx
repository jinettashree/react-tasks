import { ErrorBoundary } from "react-error-boundary";
import ApiCall from "./apiCall";
import ErrorFallback from "./errorFallback";

const ApiPage = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}>
      <ApiCall />
    </ErrorBoundary>
  );
};

export default ApiPage;