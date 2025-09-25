package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity

class ModifyCalendar : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_modify_calendar)

      val cancelar = findViewById<Button>(R.id.cancelBtn)
      val save = findViewById<Button>(R.id.saveBtn)

      cancelar.setOnClickListener {
        val Intent = Intent(this, ManageCalendar::class.java)
        startActivity(Intent)
      }

      save.setOnClickListener {
        val Intent = Intent(this, ManageCalendar::class.java)
        startActivity(Intent)
      }
    }
}
