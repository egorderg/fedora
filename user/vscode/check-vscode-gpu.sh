#!/bin/bash
# Check if VS Code is using GPU acceleration on AMD 7900XT

GPU_NAME="7900"   # You can set to "7900XT" or part of your GPU string

echo "🔍 Checking VS Code GPU status..."

# 1. Is the GPU process running?
GPU_PROCESS=$(ps -e -o pid,cmd | grep -i "code" | grep -i "gpu-process" | grep -v "grep")

if [ -z "$GPU_PROCESS" ]; then
    echo "❌ No VS Code GPU process found (software rendering?)."
    exit 1
else
    echo "✅ VS Code GPU process detected."
fi

# 2. Launch a hidden instance in verbose mode and check logs
OUTPUT=$(code --verbose 2>&1 | grep -i "gpu")
if echo "$OUTPUT" | grep -q "$GPU_NAME"; then
    echo "✅ VS Code is using your GPU ($GPU_NAME detected)."
else
    echo "⚠️ Could not confirm GPU vendor in logs."
    echo "Output was:"
    echo "$OUTPUT"
fi
