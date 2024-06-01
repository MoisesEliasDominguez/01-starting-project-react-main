export default function TabButton({children, handleClick}) {

    //function handle(name) {
        //console.log('components' + name);
    //};
    // Para devolver 1 linea
    // return <h2></h2>;
    return (
        //<button onClick={() => {handle('Elías')}}>{children}
        <button onClick={handleClick}>{children}</button>
    );
}