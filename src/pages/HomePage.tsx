import React, { useMemo, useState } from 'react';

import { Avatar, Text, Button, Chip, ToggleTip, Searchfield } from '@momentum-design/components/react';
import './homepage.css';
import SimpleTable, { type TableColumn } from '../components/table/SimpleTable';

type UserRecord = {
    name: string;
    title: string;
    location: string;
};

const SAMPLE_ROWS: UserRecord[] = [
    { name: 'Alex Johnson', title: 'Engineer', location: 'NYC' },
    { name: 'Bri Chen', title: 'Designer', location: 'SF' },
    { name: 'Chris Patel', title: 'PM', location: 'Remote' },
    { name: 'Dana López', title: 'Engineer', location: 'Austin' },
];

const COLUMNS: Array<TableColumn<UserRecord>> = [
    { key: 'name', header: 'Name' },
    { key: 'title', header: 'Title' },
    { key: 'location', header: 'Location' },
];

const HomePage: React.FC = () => {
    const [query, setQuery] = useState('');

    const filteredRows = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return SAMPLE_ROWS;
        return SAMPLE_ROWS.filter((r) =>
            r.name.toLowerCase().includes(q) ||
            r.title.toLowerCase().includes(q) ||
            r.location.toLowerCase().includes(q)
        );
    }, [query]);

    return (
        <div className="home-page-wrapper">
            <div className="home-page-header">
                <div className="home-page-left-section">
                    <Avatar size={64} iconName='placeholder-regular'></Avatar>
                </div>
                <div className="home-page-middle-section">
                    <div className="home-page-middle-section-first-line">
                        <Text type="heading-midsize-bold" tagname='span'>Page title</Text>
                        <Button id="info-icon-button" variant="tertiary" size={20} prefixIcon="info-badge-filled" aria-label="info icon button"></Button>
                        <ToggleTip triggerID='info-icon-button' placement='bottom'>
                            This is a description about the page title.
                        </ToggleTip>
                        {/* TODO: make this a static chip without interaction */}
                        <Chip label='Label'></Chip>
                    </div>
                    <div className="home-page-middle-section-second-line">
                        <Text type="body-midsize-medium" tagname='span'>Description</Text>
                    </div>
                </div>
            </div>
            <div className="home-page-controls-row">
                <Searchfield
                    value={query}
                    onInput={(e: InputEvent) => setQuery((e.target as HTMLInputElement)?.value ?? '')}
                    placeholder="Search people"
                    aria-label="Search"
                />
                <Button variant="secondary">Secondary action</Button>
            </div>
            <div className="home-page-table">
                <SimpleTable columns={COLUMNS} rows={filteredRows} />
            </div>
        </div>
    );
};

export default HomePage;