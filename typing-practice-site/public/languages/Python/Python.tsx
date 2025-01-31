import React, { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';

const Python: React.FC = () => {
    const [pythonCodeBlocks, setPythonCodeBlocks] = useState<string[]>([]);

    useEffect(() => {
        const filePath = path.join('/home/zerozero/projects/dev/typing-practice-site/src/app/Components/Python', 'text.txt');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            const codeBlocks = data.split('\n\n'); // Assuming code blocks are separated by double newlines
            setPythonCodeBlocks(codeBlocks);
        });
    }, []);

    return (
        <div>
            {pythonCodeBlocks.map((block, index) => (
                <pre key={index}>
                    <code>{block}</code>
                </pre>
            ))}
        </div>
    );

    
};

export default Python