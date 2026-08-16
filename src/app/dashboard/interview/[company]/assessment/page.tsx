import AssessmentHeader from "./components/AssessmentHeader";
import QuestionSidebar from "./components/QuestionSidebar";
import QuestionPanel from "./components/QuestionPanel";
import MonacoEditor from "./components/MonacoEditor";
import ConsolePanel from "./components/ConsolePanel";

interface Props {
  params: Promise<{
    company: string;
  }>;

  searchParams: Promise<{
    mode?: string;
  }>;
}

export default async function AssessmentPage({
  params,
  searchParams,
}: Props) {
  const { company } = await params;
  const { mode = "practice" } = await searchParams;

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <AssessmentHeader
        company={company.charAt(0).toUpperCase() + company.slice(1)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <QuestionSidebar />

        {/* Problem Statement */}
        <QuestionPanel />

        {/* Editor */}
        <div className="flex w-[48%] flex-col border-l border-zinc-200 dark:border-zinc-800">
          <MonacoEditor />

          <ConsolePanel />
        </div>
      </div>
    </div>
  );
}