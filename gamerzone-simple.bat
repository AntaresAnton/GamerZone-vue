@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
color 0B

cls
echo ===============================================
echo            GAMERZONE VUE - MENU
echo ===============================================
echo.

:menu
echo OPCIONES DISPONIBLES:
echo.
echo  1. Instalar dependencias
echo  2. Iniciar servidor de desarrollo
echo  3. Compilar para produccion
echo  4. Ejecutar linter
echo  5. Formatear codigo
echo  6. Ejecutar pruebas
echo  7. Analizar tamano del bundle
echo  8. Docker - Iniciar en modo desarrollo
echo  9. Docker - Iniciar en modo produccion
echo  0. Salir
echo.
set /p choice=Selecciona una opcion: 

if "%choice%"=="1" goto install
if "%choice%"=="2" goto dev
if "%choice%"=="3" goto build
if "%choice%"=="4" goto lint
if "%choice%"=="5" goto format
if "%choice%"=="6" goto test
if "%choice%"=="7" goto analyze
if "%choice%"=="8" goto docker_dev
if "%choice%"=="9" goto docker_prod
if "%choice%"=="0" goto exit
goto invalid

:install
cls
echo ===============================================
echo           INSTALANDO DEPENDENCIAS
echo ===============================================
echo.
echo Ejecutando: npm install
npm install
echo.
echo Instalacion completada.
pause
cls
goto menu

:dev
cls
echo ===============================================
echo        INICIANDO SERVIDOR DE DESARROLLO
echo ===============================================
echo.
echo Ejecutando: npm run dev
echo Presiona Ctrl+C para detener el servidor
echo.
npm run dev
pause
cls
goto menu

:build
cls
echo ===============================================
echo          COMPILANDO PARA PRODUCCION
echo ===============================================
echo.
echo 1. Compilacion estandar (npm run build)
echo 2. Compilacion para produccion (npm run build:prod)
echo 3. Compilacion para desarrollo (npm run build:dev)
echo 4. Volver al menu principal
echo.
set /p build_choice=Selecciona una opcion: 

if "%build_choice%"=="1" (
    echo Ejecutando: npm run build
    npm run build
    echo Compilacion completada.
    pause
    cls
    goto menu
)
if "%build_choice%"=="2" (
    echo Ejecutando: npm run build:prod
    npm run build:prod
    echo Compilacion para produccion completada.
    pause
    cls
    goto menu
)
if "%build_choice%"=="3" (
    echo Ejecutando: npm run build:dev
    npm run build:dev
    echo Compilacion para desarrollo completada.
    pause
    cls
    goto menu
)
if "%build_choice%"=="4" (
    cls
    goto menu
)
goto build

:lint
cls
echo ===============================================
echo              EJECUTANDO LINTER
echo ===============================================
echo.
echo Ejecutando: npm run lint
npm run lint
echo.
echo Linting completado.
pause
cls
goto menu

:format
cls
echo ===============================================
echo             FORMATEANDO CODIGO
echo ===============================================
echo.
echo Ejecutando: npm run format
npm run format
echo.
echo Formateo completado.
pause
cls
goto menu

:test
cls
echo ===============================================
echo             EJECUTANDO PRUEBAS
echo ===============================================
echo.
echo Ejecutando: npm run test
npm run test
echo.
echo Pruebas completadas.
pause
cls
goto menu

:analyze
cls
echo ===============================================
echo         ANALIZANDO TAMANO DEL BUNDLE
echo ===============================================
echo.
echo Ejecutando: npm run build:analyze
npm run build:analyze
echo.
echo Analisis completado.
pause
cls
goto menu

:docker_dev
cls
echo ===============================================
echo     DOCKER - INICIANDO EN MODO DESARROLLO
echo ===============================================
echo.
echo Ejecutando: docker-compose -f docker-compose.dev.yml up -d
docker-compose -f docker-compose.dev.yml up -d
echo.
echo Contenedores de desarrollo iniciados.
echo La aplicacion estara disponible en http://localhost:8080
pause
cls
goto menu

:docker_prod
cls
echo ===============================================
echo     DOCKER - INICIANDO EN MODO PRODUCCION
echo ===============================================
echo.
echo Ejecutando: docker-compose up -d
docker-compose up -d
echo.
echo Contenedores de produccion iniciados.
echo La aplicacion estara disponible en http://localhost:8080
pause
cls
goto menu

:invalid
cls
echo Opcion invalida. Por favor, intenta de nuevo.
timeout /t 2 >nul
cls
goto menu

:exit
cls
echo ===============================================
echo        Gracias por usar GamerZone-vue!
echo ===============================================
echo.
timeout /t 2 >nul
exit /b 0