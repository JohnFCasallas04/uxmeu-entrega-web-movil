package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import androidx.activity.enableEdgeToEdge

class MainActivity : AppCompatActivity() {

  private lateinit var usuarioEditText: EditText
  private lateinit var passwordEditText: EditText

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContentView(R.layout.activity_main)

    usuarioEditText = findViewById(R.id.usuarioLoginText)
    passwordEditText = findViewById(R.id.passwordLoginText)

    setupClearOnFocus(usuarioEditText, "Usuario")
    setupClearOnFocus(passwordEditText, "Contraseña")

    // Encuentra el botón por su ID
    val signUpButton = findViewById<Button>(R.id.signUpBtn)
    val resetPassButton = findViewById<Button>(R.id.resetPassBtn)
    val loginButton = findViewById<Button>(R.id.loginBtn)

    loginButton.setOnClickListener {
      // Crea un Intent para iniciar CreateAccountActivity
      val intent = Intent(this, ListAlarm::class.java)
      // Inicia la nueva actividad
      startActivity(intent)
    }

    // Configura el OnClickListener para el botón
    signUpButton.setOnClickListener {
      // Crea un Intent para iniciar CreateAccountActivity
      val intent = Intent(this, CreateAccountActivity::class.java)
      // Inicia la nueva actividad
      startActivity(intent)
    }

    resetPassButton.setOnClickListener { 2
      // Crea un Intent para iniciar CreateAccountActivity
      val intent = Intent(this, ResetPassword::class.java)
      // Inicia la nueva actividad
      startActivity(intent)
    }
  }
  private fun setupClearOnFocus(editText: EditText, placeholderText: String) {
    // Guardar el texto original (placeholder) si quieres restaurarlo cuando pierda el foco y esté vacío
    // val originalPlaceholder = editText.text.toString() // O simplemente usa el placeholderText pasado

    editText.onFocusChangeListener = View.OnFocusChangeListener { v, hasFocus ->
      if (hasFocus) {
        // El campo ha ganado el foco
        if (editText.text.toString() == placeholderText) {
          editText.setText("")
        }
      } else {
        // El campo ha perdido el foco (opcional: restaurar placeholder si está vacío)
        if (editText.text.toString().isEmpty()) {
          editText.setText(placeholderText)
        }
      }
    }

    // Opcional: Si también quieres que se borre con un clic simple, incluso si ya tiene foco
    // y el texto es el placeholder.
    editText.setOnClickListener {
      if (editText.text.toString() == placeholderText) {
        editText.setText("")
      }
    }
  }
}
