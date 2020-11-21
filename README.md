# LaManicurista
🗄 Prueba técnica para LaManicurista

## Stack
- React con styled-components, redux, reduxsauce, react router, redux persist
- Axios
- Se utilizó i18 para manejar idiomas
- Se realizaron pruebas unitarias con Jest (Enzyme, renderer) PD: No se cubrió todo el coverage pero se dejaron algunos test probando snapshots y eventos como ejemplo.
- Se utilizo prettier y eslint con la configuración de Airbnb

## Estructura
En la carpeta src es donde se encuentra toda la aplicación
- __mocks__: Mocks para pruebas unitarias
- __tests__: Pruebas unitarias
- assets: Configuración de los themes de styled-components y normalización de estilos
- components: Son la parte mas pequeña de la aplicación
- containers: Se conforman por varios components
- pages: Son las páginas que deberán ser mostradas en las rutas
- config: Se encuentra la configuración del store, variables de entorno, apis y traducciones
- hoc: Higer order components
- hooks: Customs hooks de la aplicación
- reducers: Se encuentran todos los reducers y actions por medio de redux-sauce
- routes: Se encuentra la configuración de las rutas y la App principal
- utils: Funciones utilitarias

## Paso a paso para ejecutar la aplicación
- `yarn`
- `yarn start`
- Acceder a `http://localhost:8080/#/`


