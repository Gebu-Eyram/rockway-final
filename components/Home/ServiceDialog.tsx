import React from "react";

interface SubService {
  name: string;
  desc: string;
}

interface Service {
  title: string;
  desc: string;
  subServices: SubService[];
}

interface ServiceDialogProps {
  service: Service | null;
}

const ServiceDialog: React.FC<ServiceDialogProps> = ({ service }) => {
  if (!service) return null;

  return (
    <div className="inter">
      <h2 className="text-xl font-medium mb-4">{service.title}</h2>
      <p className="text-gray-700 mb-6">{service.desc}</p>
      <div className="space-y-4">
        {service.subServices.map((sub, i) => (
          <div key={i} className="border p-4 py-2 rounded-lg">
            <h3 className="text-lg font-semibold">{sub.name}</h3>
            <p className="text-gray-600">{sub.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDialog;
