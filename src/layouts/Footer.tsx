import Container from "../components/Container";
import "./footer.css";
export default function Footer() {
  return (
    <div className=" relative h-48 overflow-hidden">
      <Container>
        <div className="footer pt-5 flex flex-col justify-base items-base">
          <div className="flex justify-between items-center max-md:flex-col  max-md:justify-center">
            <div className="flex items-center">
              <p className="text-4xl text-white font-normal uppercase">CTA</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
