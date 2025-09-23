import React from "react";

type LoaderVariant =
  | "uia-text-loader-type-1"
  | "uia-text-loader-type-2"
  | "uia-text-loader-type-3";

interface TextLoaderProps {
  type: LoaderVariant;
  text: string;
}

const TextLoader: React.FC<TextLoaderProps> = ({ type, text }) => {
  return (
    <div className="uia-text-loader" data-uia-text-loader-type={type}>
      <div className="uia-text-loader__text" aria-label={text}>
        {text.split("").map((letter, index) => (
          <span className="uia-text-loader__letter" key={`${letter}-${index}`}>
            <span
              className="uia-text-loader__letter-placeholder"
              aria-hidden="true"
            >
              {letter}
            </span>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

const Softskills: React.FC = () => {
  const loaders: { type: LoaderVariant; text: string }[] = [
    { type: "uia-text-loader-type-1", text: "Leadership" },
    { type: "uia-text-loader-type-2", text: "Teamwork" },
    { type: "uia-text-loader-type-3", text: "Communication" },
    { type: "uia-text-loader-type-1", text: "Problem-solving" },
    { type: "uia-text-loader-type-2", text: "Analytical thinking" },
    { type: "uia-text-loader-type-3", text: "Adaptability" },
    // Optional extras you can toggle in/out:
    // { type: "uia-text-loader-type-1", text: "Time management" },
    // { type: "uia-text-loader-type-2", text: "Attention to detail" },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mt-20">
        <div className="inline-block text-center group">
          <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
            Soft skills
          </h3>
        </div>
      </div>

      <div className="page flex flex-box justify-between flex-wrap gap-6">
        {loaders.map((loader, index) => (
          <div className="page__loader font-semibold" key={`${loader.text}-${index}`}>
            <TextLoader type={loader.type} text={loader.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Softskills;
