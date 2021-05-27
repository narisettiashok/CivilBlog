import image from "../assets/images/construction.svg";

function ConstructionImage() {
    return (
        <div className="hidden w-full lg:w-3/6 px-4 md:block">
            <img src={image} alt="Construction"></img>
        </div>
    )
}

export default ConstructionImage;
