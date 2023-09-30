import Section from "./layout/Section";
import { testimonials } from "../data/data";

const Testimonials = () => {
 
  return (
    <Section
      title="Testimonials 💬"
      subtitle="This is what my friends said about me. Will like to change this into clients in the near future."
    >
      <div className="flex max-w-xl flex-col gap-8">
        {testimonials.map(({ id, image, client, comment }) => (
          <div key={id} className="flex items-center justify-center rounded-xl p-4 shadow-md dark:shadow-gray-300">
            <div
              className="w-1/3
                        "
            >
              <img
                src={image}
                alt={client}
                className="h-20 w-20 object-cover object-top pt-2"
              />
            </div>
            <div className="flex w-2/3 flex-col items-center justify-center gap-2 p-2">
              <h3 className="text-xl font-semibold">{client}</h3>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;