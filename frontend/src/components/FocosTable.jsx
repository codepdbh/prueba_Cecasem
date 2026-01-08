import React from 'react';

const FocosTable = ({ focos }) => {
    if (!focos || focos.length === 0) {
        return <div className="no-data">No se encontraron datos.</div>;
    }

    const getRiesgoClass = (riesgo) => {
        switch (riesgo) {
            case 'Alto': return 'riesgo-alto';
            case 'Medio': return 'riesgo-medio';
            case 'Bajo': return 'riesgo-bajo';
            default: return '';
        }
    };

    return (
        <div className="table-container">
            <table className="focos-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Departamento</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                        <th>Riesgo</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {focos.map((foco) => (
                        <tr key={foco.id}>
                            <td>{foco.id}</td>
                            <td>{foco.departamento}</td>
                            <td>{foco.latitud}</td>
                            <td>{foco.longitud}</td>
                            <td>
                                <span className={`badge ${getRiesgoClass(foco.riesgo)}`}>
                                    {foco.riesgo}
                                </span>
                            </td>
                            <td>{new Date(foco.fecha).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FocosTable;
