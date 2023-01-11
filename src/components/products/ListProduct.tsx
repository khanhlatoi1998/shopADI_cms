import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Picture',
        dataIndex: 'name',
        className: 'border-r border-solid border-[#f0f0f0]',
    },
    {
        title: 'Product Name',
        dataIndex: 'age',
        className: 'border-r border-solid border-[#f0f0f0]',
    },
    {
        title: 'Price',
        dataIndex: 'address',
        className: 'border-r border-solid border-[#f0f0f0]',
    },
    {
        title: 'Category',
        dataIndex: 'address',
        className: 'border-r border-solid border-[#f0f0f0]',
    },
    {
        title: 'Edit',
        dataIndex: 'address',
        className: 'border-r border-solid border-[#f0f0f0]',
    },
];

const data: DataType[] = [];
for (let i = 0; i < 16; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

const ListProduct = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <div>
            <p>List Product</p>
            <div className="border border-solid border-[#f0f0f0] mt-6">
                <Table
                    childrenColumnName="border border-solid border-[#f0f0f0] bg-[red]"
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    );
};

export default ListProduct;