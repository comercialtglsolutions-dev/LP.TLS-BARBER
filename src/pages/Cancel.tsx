import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full glass-card p-10 rounded-3xl text-center border-2 border-destructive/20 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="bg-destructive/10 p-4 rounded-full">
            <XCircle size={64} className="text-destructive" />
          </div>
        </div>
        <h1 className="font-heading text-3xl font-bold mb-4">Pagamento Não Concluído</h1>
        <p className="text-muted-foreground mb-8">
          Parece que houve um problema ou você desistiu da compra. 
          Se precisar de ajuda, entre em contato com nosso suporte.
        </p>
        <Link to="/">
          <Button variant="outline" className="w-full h-12 text-lg font-semibold">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
