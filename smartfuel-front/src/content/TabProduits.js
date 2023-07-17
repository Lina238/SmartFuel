import { Button, Form, Input, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';


const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
const TabProduits = () => {

  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      nomdist: 'Ed',
      tg: 'essence',
      um :"L",
      pa:"30 da",
      pv:"45"
     
    },
    {
      key: '1',
      nomdist: 'rd',
      tg: 'essence',
      um :"L",
      pa:"30 da",
      pv:"45"
     
    },
    
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: 'Nom distributeur',
      dataIndex: 'nomdist',
      width: '15%',
      editable: true,
    },
    {
      title: 'Type de Gaz',
      dataIndex: 'tg',
      width: '15%',
      editable: true,
    },
    {
      title: 'Unité de mésure',
      dataIndex: 'um',
      width: '15%',
      editable: true,
    },
    {
      title: "Prix d'achats",
      dataIndex: 'pa',
      width: '15%',
      editable: true,
    },
    {
      title: "Prix de ventes",
      dataIndex: 'pv',
      width: '15%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation', 
      width :'15%',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="êtes vous sûr?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
          
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
    
    };
    
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key); //retourne le num d'index modifié 
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div style={{ margin: '20px' }}>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 20,
        }}
      >
        Nouveau Produit
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        
      />
    </div>
  );
};


export default TabProduits



  
 
  


