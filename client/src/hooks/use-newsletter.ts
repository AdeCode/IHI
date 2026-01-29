import { useMutation } from "@tanstack/react-query";
import { api, type InsertNewsletterSubscriber } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useNewsletter() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertNewsletterSubscriber) => {
      const res = await fetch(api.newsletter.subscribe.path, {
        method: api.newsletter.subscribe.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Welcome to the Impact Hub Ibadan community.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });
}
