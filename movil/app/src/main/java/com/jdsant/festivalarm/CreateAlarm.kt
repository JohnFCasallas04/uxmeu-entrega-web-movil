package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity

class CreateAlarm : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_create_alarm)

      val cancelBtn = findViewById<Button>(R.id.cancelBtn)
      val guardarBtn = findViewById<Button>(R.id.saveAlarmBtn)

      cancelBtn.setOnClickListener {
        val Intent = Intent(this, ListAlarm::class.java)
        startActivity(Intent)
      }
      guardarBtn.setOnClickListener {
        val Intent = Intent(this, ListAlarm::class.java)
        startActivity(Intent)
      }

    }
}
