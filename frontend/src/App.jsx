import { useState, useEffect } from 'react'
import { getFocos } from './services/api'
import Filters from './components/Filters'
import FocosTable from './components/FocosTable'
import MapComponent from './components/MapComponent'
import './App.css'

function App() {
  const [focos, setFocos] = useState([])
  const [filters, setFilters] = useState({ departamento: '', riesgo: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Mock data for offline mode
  const MOCK_DATA = [
    { id: 101, departamento: 'Santa Cruz', latitud: -17.7833, longitud: -63.1821, riesgo: 'Alto', fecha: '2023-10-25T10:00:00' },
    { id: 102, departamento: 'Beni', latitud: -14.8333, longitud: -64.9, riesgo: 'Medio', fecha: '2023-10-25T11:30:00' },
    { id: 103, departamento: 'La Paz', latitud: -16.5, longitud: -68.15, riesgo: 'Bajo', fecha: '2023-10-26T09:15:00' },
    { id: 104, departamento: 'Cochabamba', latitud: -17.3895, longitud: -66.1568, riesgo: 'Alto', fecha: '2023-10-27T08:45:00' },
    { id: 105, departamento: 'Tarija', latitud: -21.5355, longitud: -64.7296, riesgo: 'Medio', fecha: '2023-10-28T14:20:00' }
  ];

  const fetchFocos = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getFocos(filters)
      setFocos(data)
    } catch (err) {
      console.warn("Backend error, using mock data:", err)
      setFocos(MOCK_DATA)
      setError('⚠️ No se pudo conectar con el servidor. Mostrando datos de ejemplo (Modo Offline).')
    } finally {
      setLoading(false)
    }
  }

  // Fetch when filters change (debounce could be added for better performance, but simple effect is fine for now)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFocos()
    }, 300) // Debounce 300ms
    return () => clearTimeout(timer)
  }, [filters])

  return (
    <div className="container">
      <header className="header">
        <h1> Sistema de Prevención de Incendios</h1>
        <p>Monitoreo de focos de calor en tiempo real</p>
      </header>

      <main>
        <div className="card">
          <Filters filters={filters} onFilterChange={setFilters} />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="card">
          <h2>Mapa de Calor</h2>
          <MapComponent focos={focos} />
        </div>

        <div className="card">
          {loading ? (
            <div className="loading">Cargando datos...</div>
          ) : (
            <FocosTable focos={focos} />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
