import React from "react";

interface TextLoaderProps {
    type: string;
    text: string;
}

const TextLoader: React.FC<TextLoaderProps> = ({ type, text }) => {
    return (
        <div className="uia-text-loader" data-uia-text-loader-type={type}>
            <div className="uia-text-loader__text">
                {text.split("").map((letter, index) => (
                    <span className="uia-text-loader__letter" key={index}>
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
    const loaders = [
        { type: "uia-text-loader-type-1", text: "Researching" },
        { type: "uia-text-loader-type-2", text: "Teamwork" },
        { type: "uia-text-loader-type-3", text: "Problem - solving" },
        { type: "uia-text-loader-type-3", text: "Communication" },
        { type: "uia-text-loader-type-3", text: "Critical thinking" },
        { type: "uia-text-loader-type-3", text: "English" },
    ];

    return (
        <div className="container mx-auto px-6 md:px-12 ">
            <div className="text-center mt-20">
                <div className="inline-block text-center group">
                    <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
                        Softskills
                    </h3>
                </div>
            </div>
            <div className="page flex flex-box justify-between">
                {loaders.map((loader, index) => (
                    <div className="page__loader font-semibold" key={index}>
                        <TextLoader type={loader.type} text={loader.text} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Softskills;
