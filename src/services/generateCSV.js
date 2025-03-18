const fs = require('fs');
const path = require('path');
const { createObjectCsvWriter } = require('csv-writer');

const generateCSV = async (data) => {
    const csvFilePath = path.join(__dirname, '../../output.csv');
    const writer = createObjectCsvWriter({
        path: csvFilePath,
        header: [
            { id: 'name', title: 'name' },
            { id: 'title', title: 'title' },
            { id: 'body', title: 'body' }
        ]
    });

    try {
        await writer.writeRecords(data);
        return csvFilePath;
    } catch (error) {
        throw new Error(`Error writing CSV file: ${error.message}`);
    }
};

module.exports = generateCSV;
