// Import components
import ConversationSection from "src/components/conversation-section";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full max-h-[calc(100dvh-28px)]">
      <ConversationSection />
    </div>
  );
}
