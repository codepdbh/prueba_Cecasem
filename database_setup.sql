CREATE DATABASE IF NOT EXISTS cecasem_prueba;
USE cecasem_prueba;

CREATE TABLE IF NOT EXISTS focos_calor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    departamento VARCHAR(100) NOT NULL,
    latitud DECIMAL(10, 8) NOT NULL,
    longitud DECIMAL(11, 8) NOT NULL,
    riesgo ENUM('Bajo', 'Medio', 'Alto') NOT NULL,
    fecha DATETIME NOT NULL
);

-- Insert dummy data for testing
INSERT INTO focos_calor (departamento, latitud, longitud, riesgo, fecha) VALUES
('Santa Cruz', -17.7833, -63.1821, 'Alto', '2023-10-25 10:00:00'),
('Beni', -14.8333, -64.9000, 'Medio', '2023-10-25 11:30:00'),
('La Paz', -16.5000, -68.1500, 'Bajo', '2023-10-26 09:15:00'),
('Santa Cruz', -17.5000, -63.0000, 'Medio', '2023-10-26 14:00:00'),
('Cochabamba', -17.3895, -66.1568, 'Alto', '2023-10-27 08:45:00');
