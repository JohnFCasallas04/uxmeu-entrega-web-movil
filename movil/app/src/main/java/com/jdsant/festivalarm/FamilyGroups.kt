package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.ImageButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.bottomnavigation.BottomNavigationView

class FamilyGroups : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_family_groups)

      val inviteBtn = findViewById<ImageButton>(R.id.inviteMemberBtn)
      val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottomNavigationView)

      inviteBtn.setOnClickListener {
        // Acción al hacer clic en el botón
        val intent = Intent(this, InviteMember::class.java)
        startActivity(intent)
      }

      bottomNavigationView.setOnNavigationItemSelectedListener {
        when (it.itemId) {
          R.id.listAlarms -> startActivity(Intent(this, ListAlarm::class.java))
          R.id.gesCal -> startActivity(Intent(this, ManageCalendar::class.java))
          }
          true
      }
    }
}
