import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import qrcode from 'qrcode';
import Loader from '../Loader/Loader';
import './Inicio.css';

const Inicio = () => {
  const [imagen, setImagen] = useState('');
  const [loader, setLoader] = useState(false);

  const linkRef = useRef();

  const cambiar = async () => {
    if (linkRef.current.value !== '') {
      const qr = await qrcode.toDataURL(linkRef.current.value);
      await setLoader(true);
      await setImagen(qr);
    } else {
      console.log('error');
    }
  };

  const reinicio = () => {
    setLoader(false);
  };

  return (
    <div className='inicio'>
      {loader ? (
        imagen !== '' ? (
          <div className='qr'>
            <h1 className='qr__title'>Escanea del codigo</h1>
            <a className='qr__link' href={imagen} download>
              <figure className='qr__images'>
                <img className='qr__qr' src={imagen} alt='' download />
              </figure>
              Presiona la imagen para descargarla
            </a>
            <Link className='qr__link' to='/' onClick={reinicio}>
              Regresar al Inicio
            </Link>
          </div>
        ) : (
          <Loader />
        )
      ) : (
        <div className='inicio__content'>
          <h1 className='inicio__title'>Ingresar Link</h1>
          <input className='inicio__input' ref={linkRef} type='text' />
          <button className='inicio__button' onClick={cambiar}>
            Convertir a QR
          </button>
        </div>
      )}
    </div>
  );
};

export default Inicio;
