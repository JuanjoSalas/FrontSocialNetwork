import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../features/auth/authSlice';
import { Card } from 'antd';
import { Image } from '@chakra-ui/react';

const { Meta } = Card;

const UserDetail = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id]);

  if (!user) return <p>cargando...</p>;


  return (
    <div>
      <h3>UserDetail</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src='https://bit.ly/dan-abramov' borderRadius='full' boxSize='150px' />
        <div style={{ marginLeft: 20 }}>
          <Card
            title='User Details'
            style={{ width: 300 }}
          >
            <Meta title={`Nombre: ${user.firstname}`} />
            <Meta title={`Apellido: ${user.lastname}`} />
            <Meta title={`Usuario: ${user.username}`} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
