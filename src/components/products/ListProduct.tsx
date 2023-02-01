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
        render: text => <div className="flex ">
            <button onClick={() => console.log(text)} className="border border-solid border-gray-300 py-2 px-3 rounded-md mx-auto block"><i className="fa-solid fa-pencil mr-2"></i>Edit</button>
        </div>
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
        <div className="text-size-4">
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