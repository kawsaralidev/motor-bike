import React from 'react';

const New = (props) => {
    const { img, name, discription } = props.now
    return (
        <div className=" ">
            <div className="   service-container border mb-4">
                <div className="">
                    <div className="row col-sm-12">
                        <div className="col-lg-5">
                            <img src={img} alt="" />
                        </div>
                        <div className="col-lg-7 px-4">
                            <h4 className="mt-3 ">{name}</h4>
                            <p className="text-start">{discription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;