# FestivAlarm

# Dependencias - Aplicación Android FestivAlarm

## Información del Proyecto
- **Paquete**: `com.jdsant.festivalarm`
- **Versión**: 1.0 (versionCode: 1)
- **SDK Mínimo**: 21 (Android 5.0)
- **SDK Objetivo**: 36 (Android 14)
- **SDK Compilación**: 36

## Plugins

| Plugin | Versión | Descripción |
|--------|---------|-------------|
| `com.android.application` | 8.12.3 | Plugin de aplicación Android |
| `org.jetbrains.kotlin.android` | 2.0.21 | Plugin de Kotlin para Android |
| `org.jetbrains.kotlin.plugin.compose` | 2.0.21 | Plugin de Kotlin Compose |

## Dependencias de Implementación

### AndroidX Core
- `androidx.core:core-ktx:1.10.1` - Extensiones Kotlin para Android

### Lifecycle y Activity
- `androidx.lifecycle:lifecycle-runtime-ktx:2.6.1` - Gestión del ciclo de vida
- `androidx.activity:activity-compose:1.8.0` - Integración de Activity con Compose
- `androidx.activity:activity:1.11.0` - Componentes de Activity

### Jetpack Compose
- `androidx.compose:compose-bom:2024.09.00` - Bill of Materials para Compose
- `androidx.compose.ui:ui` - UI básica de Compose
- `androidx.compose.ui:ui-graphics` - Gráficos para Compose
- `androidx.compose.ui:ui-tooling-preview` - Herramientas de preview
- `androidx.compose.material3:material3` - Material Design 3

### UI y Layouts
- `androidx.constraintlayout:constraintlayout:2.2.1` - Layout constraint
- `com.google.android.material:material:1.5.0` - Material Design Components
- `androidx.appcompat:appcompat:1.7.1` - Compatibilidad hacia atrás

## Dependencias de Testing

### Unit Testing
- `junit:junit:4.13.2` - Framework de testing unitario

### Android Testing
- `androidx.test.ext:junit:1.1.5` - JUnit para Android
- `androidx.test.espresso:espresso-core:3.5.1` - Testing de UI
- `androidx.compose.ui:ui-test-junit4` - Testing de Compose con JUnit4

## Dependencias de Debug
- `androidx.compose.ui:ui-tooling` - Herramientas de desarrollo para Compose
- `androidx.compose.ui:ui-test-manifest` - Manifest para testing

## Instrucciones para construir la aplicación de forma local
* Clone el repositorio usando el comando `git clone https://github.com/JohnFCasallas04/uxmeu-entrega-web-movil.git`. Como sugerencia de Android Studio, se recomienda que el proyecto se clone en una ruta sin espacios
* Ejecute Android Studio y seleccione la opción `Open`

   1. Seleccione la ruta en donde clono el repositorio y de click en el botón `OK`
   2. El proyecto comenzara a sincronizar el Gradle, espere unos minutos a que finalice el proceso
* Cree el dispositivo virtual para la ejecución del aplicativo. Para esto, diríjase a la opción de `Device Manager` y de click en el ícono `+` o en `Add a new device...` para proseguir con la opción `Create Virtual Device`
   1. La aplicación está diseñada para ser ejecutada en dispositivos Android con versión Lollipop 5.0 en adelante, por lo cual se recomienda seleccionar la opción `Show obsolete devices profiles` y buscar el dispositivo `Nexus 6` como mínimo, cualquier dispositivo con versiones superiores a la Lollipop 5.0 es compatible. Al finalizar de click en `Next`

   2. Configure el dispositivo con el nombre deseado, asegurando que la versión API seleccionada sea la `API 21 "Lollipop"; Android 5.0`. Seleccione la imagen de sistema y posteriormente haga click en `Finish`
   3. Una vez configurado el dispositivo virtual, estará disponible en la barra superior de ejecución y en el `Device Manager`
* Seleccione el botón de ejecución (botón con forma de flecha a la derecha en color verde) para que el aplicativo se compile y se instale en el dispositivo virtual seleccionado
   1. El proceso inicia la compilación e instalación en el emulador. Por favor espere a que el proceso termine. Sabra que el proceso termino una vez el aplicativo sea lanzado en el emulador de la parte derecha
Si ha llegado a este punto, felicidades, ha logrado desplegar el aplicativo Android Vynils del Team15 de manera local satisfactoriamente. Ahora, puede proseguir con probar el aplicativo como tenga planeado 



## Ubicación del APK
El APK generado se encuentra en la ruta del proyecto en la carpeta `movil\apk`, el cual puede descargar e instalar en su dispositivo Android. Para instalar el APK, asegúrese de habilitar la opción de `Instalación de aplicaciones de fuentes desconocidas` en la configuración de su dispositivo. La aplicación es compatible con dispositivos Android 5.0 (Lollipop) y versiones superiores.
 

  



