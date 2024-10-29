// server.mjs
import express from "express"; // Importar express
import path from 'path'; // Importar path
import { fileURLToPath } from 'url'; // Importar fileURLToPath para obtener la ruta del archivo actual

const app = express();
const PORT = 3000;

// Obtener el directorio del módulo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar el directorio público
app.use(express.static(path.join(__dirname, 'public')));

// Otras configuraciones y rutas aquí...

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
});
