// https://dev.to/zacharylee/explicit-resource-management-in-js-the-using-keyword-d9f

// ------------------------SYNC DISPOSE------------------------------------
{
    const getResource = () => ({
        [Symbol.dispose]: () => console.log('Sync Resource is now disposed!')
    });

    using resource = getResource();
}

// ------------------------ASYNC DISPOSE------------------------------------
{
    const getResourceAsync = () => ({
        [Symbol.asyncDispose]: async () => {
            await Promise.resolve();
            console.log('Async Resource is now disposed!');
        }
    });

    {
        await using resource = getResourceAsync();
    }
}