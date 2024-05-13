import Container from "../Container";

export default function AboutUs() {
  return (
    <div className="pt-20 max-sm:pt-10">
      <Container className="min-h-screen flex flex-col items-center">
        <h4 className="text-[2.5rem] text-white sm:text-3xl xl:text-4xl font-bold leading-tight capitalize text-center max-sm:text-2xl mb-16 max-sm:mb-10">
          About Us
        </h4>

        <div>
          <p className="text-xl text-[#FFFFFF]/[0.7]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio
            in, cum veritatis, adipisci doloribus minima quos repellendus neque
            illum odit, tempore iste nihil quibusdam esse quidem distinctio eos
            eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis vel nisi ut eum, magni quibusdam velit aut numquam nobis
            incidunt libero temporibus possimus nostrum obcaecati, similique
            eveniet architecto. Assumenda, deleniti.
          </p>
        </div>
      </Container>
    </div>
  );
}
