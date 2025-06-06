import React, { useState } from 'react';
import { Calendar, Modal, Input, Button } from 'antd';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState({});
  const [currentTask, setCurrentTask] = useState('');

  const onSelect = (date) => {
    const dateKey = date.format('YYYY-MM-DD');
    setSelectedDate(dateKey);
    setCurrentTask(tasks[dateKey] || '');
    setModalVisible(true);
  };

  const handleSave = () => {
    setTasks({ ...tasks, [selectedDate]: currentTask });
    setModalVisible(false);
    setCurrentTask('');
  };

  const cellRender = (date) => {
    const dateKey = date.format('YYYY-MM-DD');
    if (tasks[dateKey]) {
      return (
        <div className="px-2 py-1 bg-blue-200 rounded text-xs">
          {tasks[dateKey]}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Calendar 
        onSelect={onSelect}
        cellRender={cellRender}
      />

      <Modal
        title={`Tarefa para ${selectedDate}`}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={handleSave}
      >
        <Input.TextArea 
          rows={4} 
          value={currentTask} 
          onChange={(e) => setCurrentTask(e.target.value)} 
          placeholder="Digite sua tarefa aqui" 
        />
      </Modal>
    </>
  );
};

export default Calendario;
