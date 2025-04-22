export default function Main(props) {
    const { data } = props
    console.log("Main data:", data);
    return (
        <div className="imgContainer">
            <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
        </div>
    )
}