import React, { useState } from 'react';
import { Calendar, Modal, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState({});
  const [currentTask, setCurrentTask] = useState('');
  const [editingId, setEditingId] = useState(null);
 const [dataBr, setdataBr] = useState({});

  const onSelect = (date) => {
    const dateKey = date.format('YYYY-MM-DD');
    setSelectedDate(dateKey);
    setModalVisible(true);
    setCurrentTask('');
    setEditingId(null);
  
  setdataBr({
    ano: date.format('YYYY'),
    mes: date.format('MM'),
    dia: date.format('DD'),
  })}
  console.log(selectedDate)
  console.log(dataBr);
  ;

  
  
  const handleSave = () => {
    if (!currentTask.trim()) return;

    setTasks((prev) => {
      const dateTasks = prev[selectedDate] || [];

      if (editingId) {
        return {
          ...prev,
          [selectedDate]: dateTasks.map((t) =>
            t.id === editingId ? { ...t, text: currentTask } : t
          ),
        };
      }

      const newTask = { id: uuidv4(), text: currentTask };
      return {
        ...prev,
        [selectedDate]: [...dateTasks, newTask],
      };
    });

    setModalVisible(false);
    setCurrentTask('');
    setEditingId(null);
  };

  const handleEdit = (task) => {
    setCurrentTask(task.text);
    setEditingId(task.id);
  };

  const handleDelete = (taskId) => {
    setTasks((prev) => ({
      ...prev,
      [selectedDate]: prev[selectedDate].filter((t) => t.id !== taskId),
    }));
  };

  const cellRender = (date) => {
    const dateKey = date.format('YYYY-MM-DD');
    const dateTasks = tasks[dateKey] || [];

    return (
      <div className="flex flex-col gap-1">
        {dateTasks.map((task) => (
          <div
            key={task.id}
            className="bg-blue-200 px-2 py-1 rounded text-xs flex justify-between items-center"
          >
            <span className="truncate">{task.text}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Calendar onSelect={onSelect} cellRender={cellRender} />

      <Modal
      
        title={`Data: ${dataBr.dia}/${dataBr.mes}/${dataBr.ano}`}
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setEditingId(null);
          setCurrentTask('');
        }}
        onOk={handleSave}
        okText={editingId ? 'Salvar edição' : 'Adicionar'}
      >
        <div className="flex flex-col gap-2 mb-4">
          {(tasks[selectedDate] || []).map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-200 p-2 rounded "
            >
              <span>{task.text}</span>
              <div className="flex gap-2">
                <EditOutlined
                  onClick={() => handleEdit(task)}
                  style={{ cursor: 'pointer' }}
                />
                <DeleteOutlined
                  onClick={() => handleDelete(task.id)}
                  style={{ cursor: 'pointer', color: 'red' }}
                />
              </div>
            </div>
          ))}
        </div>

        <Input.TextArea
          rows={3}
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="Digite aqui o que gostaria de lembrar"
        />
      </Modal>
    </>
  );
};

export default Calendario;
