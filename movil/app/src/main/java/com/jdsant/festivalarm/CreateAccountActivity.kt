package com.jdsant.festivalarm

import android.os.Bundle
import android.view.View
import android.widget.EditText
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity

class CreateAccountActivity : AppCompatActivity() {

  // Es buena práctica declarar variables para las vistas si las usarás en múltiples lugares
  private lateinit var nombresEditText: EditText // Usa TextInputEditText si es el tipo exacto
  private lateinit var apellidosEditText: EditText
  private lateinit var correoEditText: EditText
  private lateinit var claveEditText: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_create_account)

        // Inicializa tus EditTexts
        nombresEditText = findViewById(R.id.textInputEditTextNombres) // Usa el ID correcto de tu XML
        apellidosEditText = findViewById(R.id.textInputEditTextApellidos)
        correoEditText = findViewById(R.id.textInputEditTextCorreo)
        claveEditText = findViewById(R.id.textInputEditTextClave)

        // Configura el listener para cada campo
        setupClearOnFocus(nombresEditText, "Ingrese sus nombres") // El texto placeholder que quieres borrar
        setupClearOnFocus(apellidosEditText, "Ingrese sus apellidos")
        setupClearOnFocus(correoEditText, "Ingrese su correo")
        setupClearOnFocus(claveEditText, "Ingrese su contraseña")

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
