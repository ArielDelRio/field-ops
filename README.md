# FieldOps Mobile - Plan de entrenamiento RN (modo mentor)

Este repo se usara como tablero unico de trabajo.
Tu implementas cada tarea y yo te acompano con revision, feedback, debugging y mejoras.

## Como trabajaremos

1. Tomas la siguiente tarea marcada como pendiente.
2. La implementas en cambios pequenos.
3. Me pasas lo que hiciste (codigo, errores o dudas).
4. Yo reviso contra criterios de aceptacion y te digo ajustes concretos.
5. Marcamos la tarea como completada y avanzamos.

## Reglas del proyecto

- Expo + React Native + TypeScript estrictamente.
- Expo Router para navegacion.
- Arquitectura por features.
- Pantallas delgadas: logica en hooks, servicios y stores.
- TanStack Query para estado remoto.
- Zustand solo para estado local no remoto.
- No meter librerias nativas que rompan Expo salvo necesidad real.

## Modo produccion (training serio)

- Objetivo: acercarnos lo maximo posible a una app productiva, no solo demo de Expo Go.
- Minimo obligatorio: correr en emulador (iOS Simulator o Android Emulator).
- Expo Go se puede usar para iterar rapido, pero no sera el unico entorno de validacion.
- Cuando una feature requiera capacidades nativas no disponibles en Expo Go, usar Dev Client.
- Validar flujos clave en ambos modos cuando aplique: desarrollo rapido y entorno cercano a produccion.
- Antes de marcar una tarea como completada, ejecutar validacion en emulador.

---

## Fase 0 - Setup y disciplina de trabajo

### T0.1 - Inicializacion del proyecto Expo
- Estado: [x] Completada
- Objetivo RN: comprender estructura base de Expo y ciclo de desarrollo.
- Source:
	- Expo Docs - Create a project: https://docs.expo.dev/get-started/create-a-project/
	- Expo Docs - Set up your environment: https://docs.expo.dev/get-started/set-up-your-environment/
	- Expo Docs - Start developing: https://docs.expo.dev/get-started/start-developing/
	- Expo Docs - Unit testing with Jest: https://docs.expo.dev/develop/unit-testing/
- Entregable:
	- proyecto inicial ejecutando en Expo Go
	- scripts de start, test y typecheck
- Criterios de aceptacion:
	- `npm run start` funciona
	- app abre sin errores de TypeScript
- Aprendido:
	- `typecheck` valida tipos sin depender de levantar la app.
	- `Jest` ejecuta pruebas y `React Native Testing Library` ayuda a renderizar y consultar la UI.

### T0.2 - Configurar Expo Router + TypeScript estricto
- Estado: [ ] Pendiente
- Objetivo RN: dominar file-based routing y typed routes.
- Entregable:
	- configuracion de Expo Router
	- `strict: true` en TypeScript
- Criterios de aceptacion:
	- rutas cargan por archivos
	- typecheck limpio

### T0.3 - Estructura por features
- Estado: [ ] Pendiente
- Objetivo RN: arquitectura mantenible para apps medianas/grandes.
- Entregable:
	- carpetas separadas para `auth`, `tasks`, `scanner`, `notifications`, `shared`
- Criterios de aceptacion:
	- UI reusable separada de componentes por feature

---

## Fase 1 - Sprint 1 (base funcional)

### T1.1 - Sistema de tema + componentes base
- Estado: [ ] Pendiente
- Objetivo RN: consistencia visual y reutilizacion.
- Entregable:
	- tema (colores, spacing, tipografia)
	- componentes `Screen`, `Button`, `Input`, `Card`
- Criterios de aceptacion:
	- componentes reutilizables en 2+ pantallas

### T1.2 - Navegacion principal (tabs + stack)
- Estado: [ ] Pendiente
- Objetivo RN: composicion de navegacion realista.
- Entregable:
	- tabs: Dashboard, Tasks, Scan, Profile
	- stack para pantallas de detalle
- Criterios de aceptacion:
	- navegacion entre tabs estable
	- detail abre desde Tasks

### T1.3 - Dominio de Tasks + DTOs + mappers
- Estado: [ ] Pendiente
- Objetivo RN: separar contrato API del modelo interno.
- Entregable:
	- tipos de dominio (`Task`)
	- DTOs de API (`TaskDto`)
	- mapper `TaskDto -> Task`
- Criterios de aceptacion:
	- UI nunca consume DTO crudo directamente

### T1.4 - Lista de tareas con mock data (FlatList)
- Estado: [ ] Pendiente
- Objetivo RN: listas performantes y renderizado escalable.
- Entregable:
	- servicio mock de tareas
	- pantalla de Tasks con `FlatList`
- Criterios de aceptacion:
	- scroll fluido
	- keys estables

### T1.5 - Detalle de tarea
- Estado: [ ] Pendiente
- Objetivo RN: navegacion con parametros tipados.
- Entregable:
	- pantalla detalle por `taskId`
	- enlace desde item de lista
- Criterios de aceptacion:
	- al tocar una tarea se ve su detalle correcto

### T1.6 - Estado local y remoto (base)
- Estado: [ ] Pendiente
- Objetivo RN: uso correcto de Zustand vs TanStack Query.
- Entregable:
	- store Zustand para sesion/preferencias
	- queries para tasks list/detail
- Criterios de aceptacion:
	- no usar Zustand para cache remoto

### T1.7 - Formularios con RHF + Zod
- Estado: [ ] Pendiente
- Objetivo RN: validacion robusta tipada.
- Entregable:
	- formulario simple (por ejemplo, filtro de tareas o perfil)
	- esquema Zod + React Hook Form
- Criterios de aceptacion:
	- errores de validacion visibles en UI

### T1.8 - Testing base del sprint
- Estado: [ ] Pendiente
- Objetivo RN: asegurar calidad desde el inicio.
- Entregable:
	- tests con Jest + RNTL para lista y detalle
- Criterios de aceptacion:
	- tests verdes
	- sin `only` ni `skip`

---

## Fase 2 - Capacidades senior (despues de Sprint 1)

### T2.1 - Scanner QR/Barra (Expo Camera)
- Estado: [ ] Pendiente
- Objetivo RN: permisos, ciclo de camara, UX de escaneo.

### T2.2 - Offline first (AsyncStorage o SQLite)
- Estado: [ ] Pendiente
- Objetivo RN: cache local, cola de cambios y resiliencia de red.

### T2.3 - Motor de sincronizacion
- Estado: [ ] Pendiente
- Objetivo RN: reconciliacion de cambios locales/remotos y conflictos.

### T2.4 - Ubicacion (Expo Location)
- Estado: [ ] Pendiente
- Objetivo RN: permisos en foreground/background y privacidad.

### T2.5 - Notificaciones (Expo Notifications)
- Estado: [ ] Pendiente
- Objetivo RN: registro de token, canales y manejo de eventos.

### T2.6 - E2E con Maestro
- Estado: [ ] Pendiente
- Objetivo RN: pruebas de flujos criticos en dispositivo.

---

## Definicion de terminado (DoD) por tarea

- TypeScript sin errores.
- Sin warnings criticos en consola.
- Codigo alineado a arquitectura por features.
- Prueba minima del comportamiento agregado.
- Breve nota en este README de lo aprendido (1-2 lineas).
- Validado en emulador (no solo Expo Go).

---

## Progreso rapido

- Fase actual: Sprint 1
- Tarea actual sugerida: T0.2

Cuando completes una tarea, cambia `Estado: [ ] Pendiente` por `Estado: [x] Completada`.
