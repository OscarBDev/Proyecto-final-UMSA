# Simulador de Impacto Económico en Bolivia

## Descripción

Este proyecto web permite simular diferentes escenarios económicos que afectan a la población boliviana mediante cálculos interactivos desarrollados con HTML, CSS, Bootstrap, JavaScript y Chart.js.

El sistema está compuesto por tres módulos principales:

* 🚗 Simulador de Reserva de Carburantes.
* 🛒 Simulador del Incremento de Precios de Alimentos.
* 🚌 Simulador del Costo de Transporte por Desvíos.

---

## 🛠 Tecnologías Utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* Chart.js

---

## 🧩 Estructura del proyecto

```
/proyecto
├── index.html
├── css
      └──calendar.css
      └──styles.css
├── js
      └──alimentos.js
      └──calculos.js
      └──calendar.js
      └──graficaAlimentos.js
      └──graficasProductos.js
      └──mapa.js
      └──transporte.js
      └──validaciones.js
├── img
      └──alimentos.jpg
      └──carburantes.jpg
      └──logo_sin_fondo.png
      └──logo_sin-fondo.ico
      └──logo.png
      └──transporte.jpg
└── README.md
```

# Validaciones Generales

Antes de realizar cualquier cálculo se valida que los datos ingresados sean correctos.

## Número positivo

Verifica que el dato ingresado sea numérico y mayor que cero.

```javascript
function numeroPositivo(x){
    return !isNaN(Number(x)) && Number(x) > 0;
}
```

## Límite máximo permitido

Evita que los valores superen 1.000.000.

```javascript
function sobrepasa(x){
    return !isNaN(x) && Number(x) <= 1000000;
}
```

---

# Módulo A: Reserva de Carburantes

## Objetivo

Calcular cuánto tiempo durará una reserva de carburante considerando:

* Cantidad inicial.
* Consumo diario.
* Reabastecimiento diario.
* Nivel crítico.

---

## Duración estimada de la reserva

Calcula cuántos días durará la reserva.

```javascript
function DuracionDias(ci, cd, rd){
    return ci / (cd - rd);
}
```

### Fórmula

```text
Duración = Cantidad Inicial / (Consumo Diario - Reabastecimiento Diario)
```

---

## Día crítico

Determina el día en que la reserva alcanzará el nivel crítico.

```javascript
function diaCritico(ci, nc, cd, rd){
    return (ci - nc) / (cd - rd);
}
```

### Fórmula

```text
Día Crítico = (Cantidad Inicial - Nivel Crítico) / (Consumo Diario - Reabastecimiento Diario)
```

---

## Estado de la reserva

Evalúa el estado final de la reserva.

```javascript
function estadoEvaluado(dd, dc){
    if (dd <= dc){
        return "❌ Reserva Agotada";
    } else {
        return "⚠️ Reserva Critica";
    }
}
```

---

## Resultados obtenidos

* Duración estimada.
* Día crítico.
* Estado de la reserva.
* Calendario dinámico de reservas.

### Calendario

El calendario muestra:

* 🟢 Días normales.
* 🟡 Días cercanos al nivel crítico.
* 🔴 Días sin reserva.

Además se muestra la cantidad estimada de carburante restante por día.

---

# Módulo B: Incremento de Precios de Alimentos

## Objetivo

Determinar cuánto más gasta una familia debido al incremento de precios de productos de la canasta familiar.

---

## Productos disponibles

* Pollo
* Huevo
* Queso

Cada producto puede cargar automáticamente valores de ejemplo.

---

## Datos de entrada

* Producto consumido.
* Precio inicial.
* Precio actual.
* Cantidad consumida por semana.
* Número de semanas.

---

## Incremento de precio

Calcula cuánto aumentó el precio del producto.

```javascript
function incrementoPrecio(pa, pi){
    return pa - pi;
}
```

### Fórmula

```text
Incremento = Precio Actual - Precio Inicial
```

---

## Porcentaje de aumento

Calcula el porcentaje de incremento.

```javascript
function porcentajeAumento(i, pi){
    return (i / pi) * 100;
}
```

### Fórmula

```text
Porcentaje = (Incremento / Precio Inicial) * 100
```

---

## Gasto semanal

Calcula el gasto semanal actual.

```javascript
function gastoSemanal(pa, cc){
    return pa * cc;
}
```

### Fórmula

```text
Gasto Semanal = Precio Actual × Cantidad Consumida
```

---

## Gasto mensual

Calcula el gasto mensual estimado.

```javascript
function gastoMensual(gs, ns){
    return gs * ns;
}
```

### Fórmula

```text
Gasto Mensual = Gasto Semanal × Número de Semanas
```

---

## Diferencia de gasto

Determina cuánto más se gasta actualmente.

```javascript
function diferencia(pi, pa, cc, ns){
    let antes = pi * cc * ns;
    let ahora = pa * cc * ns;

    return ahora - antes;
}
```

### Fórmula

```text
Diferencia = Gasto Actual - Gasto Anterior
```

---

## Resultados obtenidos

* Producto seleccionado.
* Incremento del precio.
* Porcentaje de aumento.
* Gasto semanal.
* Gasto mensual.
* Diferencia de gasto.

---

## Gráfico Comparativo

Se genera una gráfica de barras utilizando Chart.js para comparar:

* Gasto antes del aumento.
* Gasto después del aumento.

Esto permite visualizar fácilmente el impacto económico del incremento de precios.

---

# Módulo C: Simulador de Transporte

## Objetivo

Calcular el incremento de gastos ocasionado por bloqueos, desvíos o rutas más largas.

---

## Datos de entrada

* Distancia normal.
* Distancia con desvío.
* Costo por kilómetro.
* Número de viajes por semana.

---

## Costo normal

Calcula el costo habitual del recorrido.

```javascript
function costoNomal(dn, ck){
    return dn * ck;
}
```

### Fórmula

```text
Costo Normal = Distancia Normal × Costo por Kilómetro
```

---

## Costo con desvío

Calcula el costo considerando una ruta alternativa.

```javascript
function costoConDesvio(dd, ck){
    return dd * ck;
}
```

### Fórmula

```text
Costo con Desvío = Distancia con Desvío × Costo por Kilómetro
```

---

## Diferencia de costo

Calcula cuánto aumenta el costo por viaje.

```javascript
function diferenciaDeCosto(cn, ccd){
    return ccd - cn;
}
```

### Fórmula

```text
Diferencia = Costo con Desvío - Costo Normal
```

---

## Gasto adicional semanal

Calcula el gasto adicional semanal.

```javascript
function gastoAdiSemanal(ddc, nv){
    return ddc * nv;
}
```

### Fórmula

```text
Gasto Adicional Semanal = Diferencia × Número de Viajes
```

---

## Gasto adicional mensual

Calcula el gasto adicional mensual.

```javascript
function gastoAdiMensual(gas){
    return gas * 4;
}
```

### Fórmula

```text
Gasto Adicional Mensual = Gasto Adicional Semanal × 4
```

---

## Resultados obtenidos

* Costo normal.
* Costo con desvío.
* Diferencia por viaje.
* Gasto adicional semanal.
* Gasto adicional mensual.
* Mensaje informativo del impacto económico.

---

# Características del Proyecto

* Validación de datos.
* Diseño responsive para dispositivos móviles.
* Calendario dinámico para reservas de carburantes.
* Gráficos interactivos mediante Chart.js.
* Interfaz desarrollada con Bootstrap 5.
* Simulación de escenarios económicos reales.

---

# Autor

Proyecto académico desarrollado para analizar el impacto económico de diferentes situaciones relacionadas con:

* Carburantes.
* Alimentos.
* Transporte.

Aplicando programación web, validaciones, cálculos matemáticos y visualización de datos.
