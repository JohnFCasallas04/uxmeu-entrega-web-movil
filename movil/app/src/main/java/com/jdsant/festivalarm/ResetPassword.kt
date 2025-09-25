package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.ui.semantics.dismiss
import androidx.appcompat.app.AlertDialog

class ResetPassword : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_reset_password)

      // Lógica botones
      val cancelBtn = findViewById<Button>(R.id.cancelBtn)
      val resetPassBtn = findViewById<Button>(R.id.resetPassBtn)
      // Configura el OnClickListener para el botón
      cancelBtn.setOnClickListener {
        // Crea un Intent para iniciar CreateAccountActivity
        val intent = Intent(this, MainActivity::class.java)
        // Inicia la nueva actividad
        startActivity(intent)
      }
      resetPassBtn.setOnClickListener {
        // Crea el dialogo PopUp
        // Crear y mostrar el AlertDialog
        AlertDialog.Builder(this)
          .setTitle("Información de Restablecimiento")
          .setMessage("Se envio un enlace de recuperación de contraseña.")
          .setPositiveButton("Aceptar") { dialog, _ ->
            // Esta acción se ejecuta cuando el usuario presiona "Entendido"
            dialog.dismiss() // Cierra el diálogo
            // Podrías añadir más lógica aquí si es necesario,
            // como navegar a otra pantalla o realizar otra acción.
          }
          // Opcional: Si quieres que no se pueda cerrar tocando fuera o con el botón atrás
          .setCancelable(false)
          .show()
      }
    }
}
