from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector
from mysql.connector import Error
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="Cecasem Fire Prevention API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Configuration
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'cecasem_prueba'
}

# Pydantic Model
class FocoCalor(BaseModel):
    id: int
    departamento: str
    latitud: float
    longitud: float
    riesgo: str
    fecha: datetime

    class Config:
        from_attributes = True

def get_db_connection():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        return connection
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        raise HTTPException(status_code=500, detail="Database connection error")

@app.get("/")
def read_root():
    return {"message": "Welcome to Cecasem Fire Prevention API"}

@app.get("/focos", response_model=List[FocoCalor])
def get_focos(
    departamento: Optional[str] = Query(None, description="Filter by department"),
    riesgo: Optional[str] = Query(None, description="Filter by risk level (Bajo, Medio, Alto)")
):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    
    query = "SELECT * FROM focos_calor WHERE 1=1"
    params = []
    
    if departamento:
        query += " AND departamento = %s"
        params.append(departamento)
    
    if riesgo:
        query += " AND riesgo = %s"
        params.append(riesgo)
        
    try:
        cursor.execute(query, params)
        focos = cursor.fetchall()
        return focos
    except Error as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()
        connection.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
