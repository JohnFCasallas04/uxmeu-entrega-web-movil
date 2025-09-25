# FestivAlarm 🎉📱

Aplicación multiplataforma para la gestión de alarmas de festivales, disponible tanto en versión web como móvil Android.

## 📋 Descripción del Proyecto

FestivAlarm es una aplicación diseñada para ayudar a los usuarios a gestionar y programar alarmas relacionadas con eventos de festivales. El proyecto incluye dos implementaciones:

- **Aplicación Web**: Desarrollada con Angular 15.0.3
- **Aplicación Móvil**: Desarrollada con Android nativo usando Kotlin y Jetpack Compose

## 🏗️ Estructura del Proyecto

```
uxmeu-entrega-web-movil/
├── web/                    # Aplicación web Angular
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── README.md
├── movil/                  # Aplicación móvil Android
│   ├── app/
│   ├── apk/               # APK generado
│   ├── build.gradle.kts
│   └── README.md
└── README.md              # Este archivo
```

---

## 🌐 Aplicación Web (Angular)

### Información Técnica
- **Framework**: Angular CLI v15.0.3
- **Tipo**: Single Page Application (SPA)
- **Puerto**: http://localhost:4200/

### Comandos Disponibles

#### Servidor de Desarrollo
```bash
cd web
ng serve
```
Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

#### Generación de Código
```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

#### Construcción
```bash
ng build
```
Los artefactos de construcción se almacenarán en el directorio `dist/`.

#### Pruebas Unitarias
```bash
ng test
```
Ejecuta las pruebas unitarias via [Karma](https://karma-runner.github.io).

#### Pruebas End-to-End
```bash
ng e2e
```

#### Ayuda Adicional
```bash
ng help
```
O consulta la [documentación oficial de Angular CLI](https://angular.io/cli).

---

## 📱 Aplicación Móvil Android

### Información Técnica
- **Paquete**: `com.jdsant.festivalarm`
- **Versión**: 1.0 (versionCode: 1)
- **SDK Mínimo**: 21 (Android 5.0 Lollipop)
- **SDK Objetivo**: 36 (Android 14)
- **SDK Compilación**: 36
- **Lenguaje**: Kotlin con Jetpack Compose

### Tecnologías Principales
- ✅ **Jetpack Compose** - UI moderna y declarativa
- ✅ **Material Design 3** - Diseño actual de Google
- ✅ **Kotlin** - Lenguaje principal con extensiones
- ✅ **AndroidX** - Librerías modernas de soporte

### 🚀 Instalación y Configuración

#### Prerrequisitos
- Android Studio Arctic Fox o superior
- JDK 11 o superior
- SDK de Android con API 21+

#### Pasos para Desarrollo Local

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/JohnFCasallas04/uxmeu-entrega-web-movil.git
   ```
   > **Nota**: Se recomienda clonar en una ruta sin espacios

2. **Abrir en Android Studio**
   - Ejecutar Android Studio
   - Seleccionar `Open`
   - Navegar a la carpeta del proyecto clonado
   - Hacer clic en `OK`
   - Esperar a que sincronice Gradle

3. **Configurar Dispositivo Virtual**
   - Ir a `Device Manager`
   - Hacer clic en `+` o `Add a new device...`
   - Seleccionar `Create Virtual Device`
   - Activar `Show obsolete devices profiles`
   - Seleccionar `Nexus 6` (mínimo) o dispositivo compatible
   - Configurar con API 21 "Lollipop" Android 5.0 o superior
   - Hacer clic en `Finish`

4. **Ejecutar la Aplicación**
   - Seleccionar el dispositivo virtual en la barra superior
   - Hacer clic en el botón de ejecución (▶️ verde)
   - Esperar a que compile e instale en el emulador

### 📦 APK Precompilado

El APK generado se encuentra en: `movil/apk/FestivAlarm.apk`

#### Instalación del APK
1. Descargar el APK desde la carpeta `movil/apk/`
2. Habilitar "Instalación de aplicaciones de fuentes desconocidas" en configuración del dispositvo
3. Instalar el APK en el dispositivo Android
4. La aplicación es compatible con Android 5.0 (API 21) y versiones superiores

### Dependencias Principales

| Categoría | Dependencia | Versión |
|-----------|-------------|---------|
| **Core Android** | androidx.core:core-ktx | 1.10.1 |
| **UI Framework** | androidx.compose:compose-bom | 2024.09.00 |
| **Material Design** | androidx.compose.material3:material3 | - |
| **Lifecycle** | androidx.lifecycle:lifecycle-runtime-ktx | 2.6.1 |
| **Testing** | junit:junit | 4.13.2 |

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto forma parte del curso UX - Mejoramiento de Experiencia de Usuario, MISO-202514.

## 👥 Equipo de Desarrollo

- **Repositorio**: [uxmeu-entrega-web-movil](https://github.com/JohnFCasallas04/uxmeu-entrega-web-movil)
- **Developers**: JohnFCasallas04 | jd-sant
- **Branch Actual**: movil

---

## 📞 Soporte

Para obtener ayuda adicional:
- **Web**: Consulta la [documentación de Angular](https://angular.io/docs)
- **Móvil**: Revisa la [documentación de Android](https://developer.android.com/docs)
- **Issues**: Reporta problemas en el [repositorio de GitHub](https://github.com/JohnFCasallas04/uxmeu-entrega-web-movil/issues)
