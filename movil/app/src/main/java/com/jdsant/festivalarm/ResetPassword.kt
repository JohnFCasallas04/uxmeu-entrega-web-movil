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
        // Crea un Intent para iniciar CreateAccountActivity
        val intent = Intent(this, MainActivity::class.java)
        // Inicia la nueva actividad
        startActivity(intent)
      }
    }
}
