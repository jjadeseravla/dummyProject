// import React from 'react';
// import Card from './Card';
// import Button from './Button';
// import classes from './Modal.module.css'; 

// const Modal = (props) => {
//   return (
//     <>
//       <div className={classes.backdrop} onClick={props.onConfirm}>
//     <Card>
//       <header>
//         <h2>
//           {props.title}
//         </h2>
//         <div>
//           <p>
//             {props.message}
//           </p>
//         </div>
//         <footer>
//           <Button onClick={props.onConfirm}>ok</Button>
//         </footer>
//       </header>
//       </Card>
//       </div>
//     </>
//   )
// }

// export default Modal;
import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './Modal.module.css'; 

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <div className={classes.modal}>
          <Card/>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>

          <Card/>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Modal;
