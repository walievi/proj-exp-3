export const exportToCSV = (data, columns) => {
    const csvRows = [];
    const headers = columns.join(',');
    csvRows.push(headers);

    data.forEach(item => {
        const values = columns.map(column => item[column] || '').join(',');
        csvRows.push(values);
    });
    
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}