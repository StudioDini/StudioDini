#!/bin/bash

echo "🔨 Building Studio Dini for GitHub Pages..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "📂 Build files are in the /dist directory"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. git add ."
    echo "   2. git commit -m 'Fix: Configure for GitHub Pages'"
    echo "   3. git push origin main"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://YOUR_USERNAME.github.io/StudioDini/"
    echo ""
else
    echo ""
    echo "❌ Build failed! Check the errors above."
    exit 1
fi
