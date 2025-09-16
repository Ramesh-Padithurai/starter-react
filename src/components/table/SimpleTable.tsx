import React from 'react';

export interface TableColumn<T extends Record<string, unknown>> {
    key: keyof T;
    header: string;
    width?: string;
}

export interface SimpleTableProps<T extends Record<string, unknown>> {
    columns: Array<TableColumn<T>>;
    rows: Array<T>;
    emptyState?: string;
}

function renderCellValue(value: unknown): React.ReactNode {
    if (value === null || value === undefined) return '';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
}

const SimpleTable = <T extends Record<string, unknown>>({ columns, rows, emptyState = 'No data' }: SimpleTableProps<T>): React.ReactElement => {
    return (
        <div className="simple-table-wrapper">
            <table className="simple-table" role="table">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={String(col.key)} style={{ width: col.width }}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="simple-table-empty">{emptyState}</td>
                        </tr>
                    ) : (
                        rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((col) => (
                                    <td key={String(col.key)}>{renderCellValue(row[col.key])}</td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SimpleTable;


