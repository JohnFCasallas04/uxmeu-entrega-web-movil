package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.bottomnavigation.BottomNavigationView

class ManageCalendar : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_manage_calendar)

      val modificarFestivos = findViewById<TextView>(R.id.modifyHolidays)
      val modificarLaboral = findViewById<TextView>(R.id.modifyWeek)
      val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottomNavigationView)

      modificarFestivos.setOnClickListener {
        val intent = Intent(this, ModifyCalendar::class.java)
        startActivity(intent)
      }

      modificarLaboral.setOnClickListener {
        val intent = Intent(this, ModifyLaboralWeek::class.java)
        startActivity(intent)
      }

      bottomNavigationView.setOnNavigationItemSelectedListener {
        when (it.itemId) {
          R.id.listAlarms -> startActivity(Intent(this, ListAlarm::class.java))
          }
          true
        }
    }
}
