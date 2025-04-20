#!/usr/bin/env python
"""
Content Generator for Victor Yu's Personal Website

This script validates and processes JSON data in the data/ directory.
It can also convert markdown/CSV to JSON for future content expansion.
"""

import json
import os
import sys
from pathlib import Path

# Define paths relative to project root
ROOT_DIR = Path(__file__).parent.parent
DATA_DIR = ROOT_DIR / "data"
LESSONS_FILE = DATA_DIR / "lessons.json"
PLACEHOLDERS_FILE = DATA_DIR / "placeholders.json"
OUTPUT_DIR = DATA_DIR

def validate_lessons_json():
    """Validate the structure of lessons.json"""
    try:
        with open(LESSONS_FILE, 'r', encoding='utf-8') as file:
            lessons = json.load(file)
        
        # Check if lessons is a list
        if not isinstance(lessons, list):
            print("Error: lessons.json should contain a list of lesson objects")
            return False
        
        # Validate each lesson
        for idx, lesson in enumerate(lessons):
            required_fields = ['id', 'title', 'description']
            for field in required_fields:
                if field not in lesson:
                    print(f"Error: Lesson {idx + 1} is missing required field '{field}'")
                    return False
        
        print(f"✓ lessons.json is valid with {len(lessons)} lessons")
        return True
    
    except FileNotFoundError:
        print(f"Error: {LESSONS_FILE} not found")
        return False
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in lessons.json: {e}")
        return False

def validate_placeholders_json():
    """Validate the structure of placeholders.json"""
    try:
        with open(PLACEHOLDERS_FILE, 'r', encoding='utf-8') as file:
            placeholders = json.load(file)
        
        # Check if placeholders has expected fields
        expected_fields = ['bio', 'research', 'hobbies']
        for field in expected_fields:
            if field not in placeholders:
                print(f"Warning: placeholders.json is missing '{field}'")
        
        print(f"✓ placeholders.json is valid")
        return True
    
    except FileNotFoundError:
        print(f"Error: {PLACEHOLDERS_FILE} not found")
        return False
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in placeholders.json: {e}")
        return False

def process_content():
    """Process and potentially transform content as needed"""
    # Currently just validates existing JSON files
    # In the future, could convert markdown/CSV to JSON
    
    lessons_valid = validate_lessons_json()
    placeholders_valid = validate_placeholders_json()
    
    if lessons_valid and placeholders_valid:
        print("\nAll content files are valid. Ready for deployment.")
        return True
    else:
        print("\nPlease fix the errors in your content files.")
        return False

if __name__ == "__main__":
    print("Content Generator for Victor Yu's Personal Website")
    print("=" * 50)
    success = process_content()
    sys.exit(0 if success else 1)
