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

  const fetchFocos = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getFocos(filters)
      setFocos(data)
    } catch (err) {
      setError('Error al cargar los datos. Verifique que el servidor backend esté corriendo.')
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
        <h1>🔥 Sistema de Prevención de Incendios</h1>
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
