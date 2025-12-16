import React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoadingButton = () => {
  return (
    <Button
      className="w-full bg-black text-white py-2 rounded-md font-bold"
      disabled
    >
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  );
};

export default LoadingButton;
