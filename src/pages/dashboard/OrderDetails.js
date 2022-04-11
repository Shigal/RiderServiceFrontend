import React, {useEffect, useState} from "react";
import { changeOrderStatus, fetchUserData, getOrderDetails } from "../../services/authService";
import { Select, Table} from "antd";
import {useNavigate} from "react-router-dom"
import InternalPreviewGroup from "antd/lib/image/PreviewGroup";


export const OrderDetails = () => {

  const {Option} = Select;

  const [orderData, setOrderData] = useState([]);

  const [updateState, setUpdateState] = useState(false);

  const [data, setData] = useState({});
  const navigate = useNavigate()

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


          {
            title: "Change Status",
            dataIndex: "",
            key: "x",
            render: (data) => (
            <Select
            labelInValue
            defaultValue={{ value: data.orderStatus }}
            style={{ width: 120 }}
            onChange={(e) => handleStatusChange(e, data)}
            >
            <Option value="WAITING">WAITING</Option>
            <Option value="ACCEPT">ACCEPT</Option>
            <Option value="DELIVERING">DELIVERING</Option>
            <Option value="DELIVERED">DELIVERED</Option>
            {/* <Option value="WAITING_FOR_A_RIDER">WAITING_FOR_A_RIDER</Option> */}
            {/* <Option value="RIDER_ACCEPTED">RIDER_ACCEPTED</Option> */}
            <Option value="CANCEL">CANCEL</Option>
            </Select>
            ),
            },

      ];

      // const tableData = 

      // const tableData = orderData.map(row => ({
      //   orderID: row.orderID,
      //   customerName: row.customerName,
      //   customerAddress: row.customerAddress,
      //   orderDate: row.orderDate,
      //   restaurantName: row.restaurantName,
      //   restaurantLocation: row.restaurantLocation,
      //   orderStatus: row.orderStatus
      // }))

      const handleStatusChange = (e, orderData) => {
        setUpdateState(true);
        const request = {...orderData, orderStatus: e.key, riderID:data.id, riderName:data.firstName, riderContactNumber:parseInt(data.contact)}
        console.log(request)
        changeOrderStatus(request).then((response) => {
          console.log(response)
          setTimeout(() => {setUpdateState(false)}, 4000)
      }).catch((e) => {
        console.log(e)
        setTimeout(() => {setUpdateState(false)}, 4000)
      })
      }

      useEffect(() => {

        fetchUserData().then((response) => {
          setData(response.data)
      }).catch((e) => {
          localStorage.clear();
          navigate("/");
      })

        getOrderDetails().then((response) => {
          console.log("tablellllll",response.data);
          setOrderData(response.data)
        }).catch((e) => {
          console.log("Data consumption failed!")
        })
      }, [])

      useEffect(() => {

        fetchUserData().then((response) => {
          setData(response.data)
      }).catch((e) => {
          localStorage.clear();
          navigate("/");
      })

        getOrderDetails().then((response) => {
          console.log("tablellllll",response.data);
          setOrderData(response.data)
        }).catch((e) => {
          console.log("Data consumption failed!")
        })
      }, [updateState])
      


    return(
        <div>
            <Table columns={columns} dataSource={orderData} loading={updateState} />
        </div>
    )
}