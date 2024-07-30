import {useRouteError} from 'react-router-dom';

export default  function ErrorElement(){
   const Error = useRouteError();
   console.error(Error);
   return(
    <>
        <div id='error'>
            <p>Something went wrong, please try again later!!!</p>
            <p><i>{Error.message}</i></p>
        </div>
    </>
   )
}

