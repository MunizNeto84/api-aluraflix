import app from "./src/app.js";

const port = 5000;

app.listen(port, () => {
  console.log(`Escutando na porta: ${port}`);
});
