package com.jdsant.festivalarm

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity

class InviteMember : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_invite_member)

      val cancelBtn = findViewById<Button>(R.id.cancelBtn)
      val inviteBtn = findViewById<Button>(R.id.inviteBtn)

      cancelBtn.setOnClickListener {
        val intent = Intent(this, FamilyGroups::class.java)
        startActivity(intent)
      }

      inviteBtn.setOnClickListener {
        val intent = Intent(this, FamilyGroups::class.java)
        startActivity(intent)
      }

    }
}
