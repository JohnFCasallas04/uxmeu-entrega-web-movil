package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity

class ModifyLaboralWeek : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_modify_laboral_week)

      val cancelBtn = findViewById<Button>(R.id.cancelBtn)
      val modifyBtn = findViewById<Button>(R.id.modifyBtn)

      cancelBtn.setOnClickListener {
        val Intent = Intent(this, ManageCalendar::class.java)
        startActivity(Intent)
      }

      modifyBtn.setOnClickListener {
        val Intent = Intent(this, ManageCalendar::class.java)
        startActivity(Intent)
      }

    }
}
