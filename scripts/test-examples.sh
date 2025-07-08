#!/bin/bash
set -e

echo "🛠 Building package..."
yarn build

echo "📦 Packing tarball..."
yarn pack > /dev/null
TARBALL=$(ls -t *.tgz | head -1)
echo "📦 Created tarball: $TARBALL"

for app in examples/*; do
  if [ -d "$app" ]; then
    echo "🔗 Installing tarball in $app"
    cd "$app"
    
    # Install the tarball
    yarn add "../../$TARBALL"
    
    if [ -f "package.json" ]; then
      if jq -e '.scripts.test' package.json >/dev/null 2>&1; then
        echo "✅ Running tests in $app"
        yarn test || echo "❌ Tests failed in $app"
      else
        echo "⚠️  No test script found in $app"
      fi
    fi
    
    cd - > /dev/null
  fi
done

echo "🧹 Cleaning up tarball..."
rm "$TARBALL"

echo "🎉 All example tests completed!"
