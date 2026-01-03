const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ color: "red"}}>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>
            Retry
        </button>
    </div>
  );
};

export default ErrorFallback;