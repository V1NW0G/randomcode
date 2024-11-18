package com.yogaapplication.adminapp.activities;

import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import com.yogaapplication.adminapp.R;

public class ClassDetailActivity extends AppCompatActivity {

    private TextView classIdTextView;
    private int classId;  // Store classId passed from MainActivity

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_class_detail);  // Ensure this layout exists

        classIdTextView = findViewById(R.id.classIdTextView);  // Assume this TextView exists in the layout

        // Get the classId passed from the intent
        classId = getIntent().getIntExtra("classId", -1);
        if (classId != -1) {
            classIdTextView.setText("Class ID: " + classId);  // Display the class ID
        }
    }
}