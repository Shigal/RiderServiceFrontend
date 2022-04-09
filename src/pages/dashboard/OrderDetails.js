import React from "react";
import { Table, Tag, Space } from 'antd';

export const OrderDetails = () => {

    const columns = [
        {
          title: 'Order Id',
          dataIndex: 'orderID',
          
        },
        {
          title: 'Customer Name',
          dataIndex: 'customerName',
        },
        {
            title: 'customer Address',
            dataIndex: 'customerAddress',
          },
          {
            title: 'Order Date',
            dataIndex: 'orderDate',
          },
          {
            title: 'Restaurant Name',
            dataIndex: 'restaurantName',
          },
          {
            title: 'Restaurant Location',
            dataIndex: 'restaurantLocation',
          },
          {
            title: 'Order Status',
            dataIndex: 'orderStatus',
          },
      ];

      const data = [
        // {
        //   key: '1',
        //   restaurant: 'The Pizza',
        //   orderId: 32,
        //   customerId: 3,
        //   orderStatus: 'Accept'
        // },
        // {
        //   key: '1',
        //   restaurant: 'KFC',
        //   orderId: 33,
        //   customerId: 7,
        //   orderStatus: 'Accept'
        // }
      ]


    return(
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}