import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1587813369290-091c9d432daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1297665166/photo/gray-commercial-big-rig-semi-truck-with-semi-trailer-running-on-the-narrow-winding-road-in.jpg?s=1024x1024&w=is&k=20&c=jxrIEHZXAzkMCWUqv0f6PVWcf4572DPtIESxyb2Wa7E="
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1338845747/photo/international-shipping-products-distribution-from-world-warehouse-management-technology-and.jpg?s=1024x1024&w=is&k=20&c=Yyv0lFbAr_U1r3fIMwdZb0NZVLKZQellXRSU_y4PXmQ="
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=1024x1024&w=is&k=20&c=SSsdBZXp94FFIDnC2zF0E28Xv_mtBFg76-IPv5Czdxk="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
