# Sistema de Prevención de Incendios / Fire Prevention System

Este proyecto es una prueba técnica para **Cecasem**, consistente en una API backend y una interfaz frontend para visualizar "focos de calor" (incendios simulados).

This project is a technical test for **Cecasem**, consisting of a backend API and a frontend interface to visualize "heat spots" (simulated fires).

---

## 🇪🇸 Español

### Requisitos Previos
*   Python 3.x
*   Node.js & npm (v16+)
*   MySQL (XAMPP o similar)

### Instalación y Ejecución

#### 1. Backend (Python/FastAPI)
La API gestiona la base de datos y provee los datos de los focos de calor.

1.  Asegúrate de que MySQL esté corriendo (enciende Apache y MySQL en XAMPP).
2.  Navega a la carpeta del proyecto:
    ```bash
    cd c:\xampp\htdocs\prueba_Cecasem
    ```
3.  Instala las dependencias:
    ```bash
    pip install -r requirements.txt
    ```
4.  Configura la Base de Datos (solo la primera vez):
    ```bash
    python setup_db.py
    ```
5.  Inicia el servidor:
    ```bash
    python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
    ```
    *   La API estará disponible en: [http://127.0.0.1:8000](http://127.0.0.1:8000)
    *   Documentación interactiva: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

#### 2. Frontend (React/Vite)
La interfaz gráfica muestra el mapa y la lista de focos.

1.  Abre una **nueva terminal** y navega a la carpeta frontend:
    ```bash
    cd c:\xampp\htdocs\prueba_Cecasem\frontend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
4.  Abre tu navegador en: [http://localhost:5173](http://localhost:5173)

### Funcionalidades
*   **Mapa Interactivo**: Visualización de puntos en un mapa (Leaflet).
*   **Lista de Focos**: Tabla con detalles de cada incidente.
*   **Filtros**:
    *   Por Departamento (con autocompletado).
    *   Por Nivel de Riesgo (Bajo, Medio, Alto).

---

## 🇺🇸 English

### Prerequisites
*   Python 3.x
*   Node.js & npm (v16+)
*   MySQL (XAMPP or similar)

### Installation & Run

#### 1. Backend (Python/FastAPI)
The API manages the database and serves the heat spot data.

1.  Ensure MySQL is running (start Apache and MySQL in XAMPP).
2.  Navigate to the project directory:
    ```bash
    cd c:\xampp\htdocs\prueba_Cecasem
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Setup Database (first time only):
    ```bash
    python setup_db.py
    ```
5.  Start the server:
    ```bash
    python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
    ```
    *   API running at: [http://127.0.0.1:8000](http://127.0.0.1:8000)
    *   Interactive Docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

#### 2. Frontend (React/Vite)
The GUI displays the map and the list of spots.

1.  Open a **new terminal** and navigate to the frontend folder:
    ```bash
    cd c:\xampp\htdocs\prueba_Cecasem\frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at: [http://localhost:5173](http://localhost:5173)

### Features
*   **Interactive Map**: Point visualization on a map (Leaflet).
*   **Spots List**: Table with incident details.
*   **Filters**:
    *   By Department (with autocomplete).
    *   By Risk Level (Low, Medium, High).
