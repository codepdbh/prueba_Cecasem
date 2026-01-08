import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <div className="filters-container">
            <div className="filter-group">
                <label>Departamento:</label>
                <input
                    type="text"
                    name="departamento"
                    list="departamentos-list"
                    placeholder="Ej. Santa Cruz"
                    value={filters.departamento || ''}
                    onChange={handleChange}
                    className="filter-input"
                />
                <datalist id="departamentos-list">
                    <option value="Beni" />
                    <option value="Chuquisaca" />
                    <option value="Cochabamba" />
                    <option value="La Paz" />
                    <option value="Oruro" />
                    <option value="Pando" />
                    <option value="Potosí" />
                    <option value="Santa Cruz" />
                    <option value="Tarija" />
                </datalist>
            </div>
            <div className="filter-group">
                <label>Nivel de Riesgo:</label>
                <select
                    name="riesgo"
                    value={filters.riesgo || ''}
                    onChange={handleChange}
                    className="filter-select"
                >
                    <option value="">Todos</option>
                    <option value="Bajo">Bajo</option>
                    <option value="Medio">Medio</option>
                    <option value="Alto">Alto</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
