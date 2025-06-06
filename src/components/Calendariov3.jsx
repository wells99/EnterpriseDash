import React, { useState } from 'react';
import { Calendar, Modal, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid'; // para gerar IDs únicos

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState({});
  const [currentTask, setCurrentTask] = useState('');
  const [editingId, setEditingId] = useState(null);

  const onSelect = (date) => {
    const dateKey = date.format('YYYY-MM-DD');
    setSelectedDate(dateKey);
    setModalVisible(true);
    setCurrentTask('');
    setEditingId(null);
  };

  const handleSave = () => {
    if (!currentTask.trim()) return;

    setTasks((prev) => {
      const dateTasks = prev[selectedDate] || [];

      // Se está editando
      if (editingId) {
        return {
          ...prev,
          [selectedDate]: dateTasks.map((t) =>
            t.id === editingId ? { ...t, text: currentTask } : t
          ),
        };
      }

      // Se é nova tarefa
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
    setModalVisible(true);
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
        title={editingId ? 'Editar tarefa' : `Adicionar tarefa para ${selectedDate}`}
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setEditingId(null);
        }}
    
       


        footer={[
          <Button
                      key="Edit"
                      icon={<EditOutlined />}
                      onClick={setEditingId}
                    >
                      Editar  
                    </Button>,
                 
                    <Button
                      key="delete"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={handleDelete}
                    >
                      Excluir
                    </Button>
                  ,
                 
                  <Button
                    key="cancel"
                    onClick={() => {
                      setModalVisible(false);
                      setEditingId(null);
                      setCurrentTask('');
                    }}
                  >
                    Cancelar
                  </Button>,
                 
                 <Button
                    key="submit"
                    type="primary"
                    onClick={handleSave}
                  >
                    {editingId ? 'Salvar' : 'Adicionar'}
                  </Button>,
                ]}
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
