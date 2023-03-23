import "../styles/Gallery.css"
function Gallery(){
    return(
        <section>
            <h2>Gallery</h2>
            <ul>
                <li>
                    <img width={200} src="assets/IMG_2576.jpg"></img>
                </li>
                <li>
                    <img width={200} src="assets/IMG_2576.jpg"></img>
                </li>
                <li>
                    <img width={200} src="assets/IMG_2576.jpg"></img>
                </li>
            </ul>
        </section>
    );
}
export default Gallery;