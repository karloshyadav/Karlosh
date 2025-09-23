import React from 'react';
function Certifications() {
    const images = [
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WNYDVN5RS42J/CERTIFICATE_LANDING_PAGE~WNYDVN5RS42J.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NZ26HDXBY2YV/CERTIFICATE_LANDING_PAGE~NZ26HDXBY2YV.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HRN5GR9A4VG3/CERTIFICATE_LANDING_PAGE~HRN5GR9A4VG3.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EXK4G5QYTJFH/CERTIFICATE_LANDING_PAGE~EXK4G5QYTJFH.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NNMRU8GG24MR/CERTIFICATE_LANDING_PAGE~NNMRU8GG24MR.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8S8X8HSCEEVN/CERTIFICATE_LANDING_PAGE~8S8X8HSCEEVN.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EVKM9R4KNBCV/CERTIFICATE_LANDING_PAGE~EVKM9R4KNBCV.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EFJRKVJF955D/CERTIFICATE_LANDING_PAGE~EFJRKVJF955D.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9FQ99QFX98C6/CERTIFICATE_LANDING_PAGE~9FQ99QFX98C6.jpeg",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~K8EFBA9W6MRK/CERTIFICATE_LANDING_PAGE~K8EFBA9W6MRK.jpeg",
    ];

    return (
        <div className="container mx-auto px-6 md:px-12 ">
            <div className="text-center mt-20">
                <p className="text-white text-xl font-bold opacity-50">My certifications reflect my commitment to learning and growth</p>
                <div className="inline-block text-center group">
                    <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
                        Certifications
                    </h3>
                </div>

            </div>
            
            <div className="infinite-scroll-container">
                <div className="scroll-wrapper">
                    {images.map((image, index) => (
                        <div key={index} className="scroll-card">
                            <img src={image} alt={`Certification ${index + 1}`} />
                        </div>
                    ))}
                    {images.map((image, index) => (
                        <div key={index + images.length} className="scroll-card">
                            <img src={image} alt={`Certification ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Certifications;
