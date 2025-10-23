#!/bin/bash

# --- integrate.sh ---
# This script parses a specially-formatted `generated.tsx` file,
# splits it into multiple component files, and places them into the
# appropriate Next.js project structure (src/app/ and src/components/).

# Exit immediately if a command exits with a non-zero status.
set -e

SOURCE_FILE="generated.tsx"

# --- Main validation ---
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: Source file '$SOURCE_FILE' not found."
    echo "Please make sure 'generated.tsx' is in the current directory."
    exit 1
fi

echo "🚀 Starting integration process from '$SOURCE_FILE'..."

# --- Processing loop ---
# Find all start markers and process each one.
# `grep` finds the lines, and `while read` processes them one by one
# to avoid issues with spaces in filenames (though none are expected here).
grep "// START:" "$SOURCE_FILE" | while read -r start_marker; do
    
    # Extract file path from the marker, e.g., "src/app/page.tsx"
    FILE_PATH=$(echo "$start_marker" | awk '{print $3}')
    
    # Create the corresponding end marker to define the block for `sed`
    # This makes the pattern matching more robust.
    END_MARKER=$(echo "$start_marker" | sed 's/START/END/')
    
    echo "  -> Processing block for: $FILE_PATH"

    # Create the destination directory if it doesn't exist (e.g., "src/components/")
    # `dirname` gets the directory part of the path, `mkdir -p` creates it recursively.
    mkdir -p "$(dirname "$FILE_PATH")"

    # --- Core Extraction Logic ---
    # 1. `sed -n "/.../,/.../p"`: Extracts the full block, including the marker lines.
    #    We escape special characters in markers to ensure `sed` treats them literally.
    # 2. `sed '1d;$d'`: Pipes the result to another `sed` command that deletes the
    #    first line (the START marker) and the last line (the END marker).
    # 3. `> "$FILE_PATH"`: Redirects the final, clean code into the destination file.
    
    START_PATTERN=$(echo "$start_marker" | sed 's/[.*+?^${}()|[\]\\]/\\&/g')
    END_PATTERN=$(echo "$END_MARKER" | sed 's/[.*+?^${}()|[\]\\]/\\&/g')

    sed -n "/$START_PATTERN/,/$END_PATTERN/p" "$SOURCE_FILE" | sed '1d;$d' > "$FILE_PATH"

    echo "     ✅ Created '$FILE_PATH'"
done

echo ""
echo "🎉 Integration complete!"
echo "Your project structure in 'src/' has been updated."
echo "Next steps:"
echo "1. Review the new files in 'src/app/' and 'src/components/'."
echo "2. Run 'npm install' or 'yarn install' if you haven't already."
echo "3. Start your dev server with 'npm run dev' or 'yarn dev'."