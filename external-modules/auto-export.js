const autoExporter = require('@devlander/collect-exports-for-bundle').default

const main = () => {

    autoExporter({
        directory: './src',
        outputFileName: "index",
        outputFilenameExtension: ".ts",
        includeExtensions: ['.ts', '.native.ts', '.web.ts'],
        

        rootDir: './src',
        allowedExtensions: ['.ts', '.native.ts', '.web.ts'],
        exportMode: 'both',
        outputFileName: 'index',
        outputFilenameExtension: '.ts',
        ignoredExtensions: ['.d.ts'],
        
        excludedFolders: ['__tests__', '__mocks__', '__snapshots__', '__fixtures__', 'test-tools'],
     
    })
}

main();