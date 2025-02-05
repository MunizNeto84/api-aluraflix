function errorHandler(err, req, res, next) {
  console.error("Erro inesperado:", err);

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      erro: err.message,
      stack: undefined,
    });
  }

  return res.status(500).json({
    erro: "Erro interno no servidor. Tente novamente mais tarde.",
  });
}

export default errorHandler;
