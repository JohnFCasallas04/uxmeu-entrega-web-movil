package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.ImageButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class ListAlarm : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_list_alarm)

      val createAlarmBtn = findViewById<ImageButton>(R.id.createAlarmBtn)
      val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottomNavigationView)

      val gesCalendarios = ManageCalendar()

      bottomNavigationView.setOnNavigationItemSelectedListener {
        when (it.itemId) {
          R.id.gesCal -> startActivity(Intent(this, gesCalendarios::class.java))
          }
          true
        }

      createAlarmBtn.setOnClickListener {
        // Lógica para crear una nueva alarma
        val Intent = Intent(this, CreateAlarm::class.java)
        startActivity(Intent)
      }
    }
}
