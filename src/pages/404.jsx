import {useRouteError} from 'react-router-dom'

export default function ErrorPage()
{
    const error = useRouteError();

    return (
        <div>
            <h1>upsss</h1>
            <h2>the pages  is not found</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}