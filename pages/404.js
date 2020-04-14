const errorPage = () => (
  <div className={'error-page'}>
    <h1>404 - Page Not Found.</h1>
    <style jsx>
      {
        `
        * {
          margin: 0;
          padding: 0;
        }
        .error-page {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        h1 {
          position: absolute;
          top: 40%;
          left: 40%;
          transform: translate(-50% -50%);
          color: #4055b1;
        }
      `
      }
    </style>
  </div >
)

export default errorPage