import React, { FC } from 'react';

import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { RiShoppingCart2Line } from 'react-icons/ri';

import Button from '@components/UI/Button';
import Pipeline from '@components/UI/Pipeline';
import { StyleProps } from '@interfaces/common';

// import { useDispatch, useSelector } from 'react-redux';
interface Props extends StyleProps {
  id?: number;
  // onChange: (selection: CardAlignment[]) => void;
}

const PrimaryHeader = styled.div`
  height: 90px;
  padding: 0 5%;
  margin: 0 auto;
  max-width: 1220px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 15px;
  }
`;

const SecondaryHeader = styled.div`
  height: 50px;
  background-color: blue;

  div {
    margin: 0 auto;
    max-width: 1220px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

const Header: FC<Props> = (props: Props) => {
  const {} = props;
  // const dispatch = useDispatch();
  // const role = useSelector((state) => state) || null;

  const role = false;

  return (
    <header>
      <PrimaryHeader>
        <Link href='/'>
          <a>
            <Image
              src='/psm.svg'
              alt='Proyectos San Marcos'
              width={126}
              height={50}
            />
          </a>
        </Link>
        <div>
          <Link href='https://cursos.proyectossm.com' passHref>
            <Button kind='ghost'>Cursos</Button>
          </Link>
          <Pipeline />
          {(role && (
            <>
              <Link href='/profile' passHref>
                <Button variant='outlined'>Mi perfil</Button>
              </Link>
              <Link href='/logout' passHref>
                <Button variant='contained'>Salir</Button>
              </Link>
            </>
          )) || (
            <>
              <Link href='/register' passHref>
                <Button kind='ghost'>Regístrate</Button>
              </Link>
              <Link href='/login' passHref>
                <Button variant='contained'>Ingresa</Button>
              </Link>
            </>
          )}
          <Pipeline />
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <RiShoppingCart2Line />
          </IconButton>
        </div>
      </PrimaryHeader>
      <SecondaryHeader>
        <div>
          <p>Secondary Header</p>
        </div>
      </SecondaryHeader>
    </header>
  );
};

export default Header;
