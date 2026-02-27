import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full glass-card p-10 rounded-3xl text-center border-2 border-primary/20 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <CheckCircle2 size={64} className="text-primary animate-pulse" />
          </div>
        </div>
        <h1 className="font-heading text-3xl font-bold mb-4">Pagamento Confirmado!</h1>
        <p className="text-muted-foreground mb-8">
          Seja bem-vindo à elite! Sua barbearia agora está pronta para escalar. 
          Em instantes você receberá um e-mail com os próximos passos.
        </p>
        <Link to="/">
          <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90">
            Ir para o Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
