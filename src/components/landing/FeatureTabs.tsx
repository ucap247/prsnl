import { useState } from 'react';
import { Palette, Search, Zap, LayoutGrid, Globe, Copy, Check, Newspaper } from 'lucide-react';
import { VerticalTabs, type VerticalTab } from '@/components/ui/overlay/VerticalTabs';

interface TabContent {
  title: string;
  content: string;
}

const tabContent: Record<string, TabContent> = {
  theming: {
    title: 'Head Automation Chief (HAC)',
    content:
      "Making machines do the boring stuff so humans can take the credit — and the coffee breaks.",
  },
  seo: {
    title: 'Automated Chaos Handler (ACH)',
    content:
      'Quietly detecting, managing, and resolving daily disasters before anyone else even realizes there was chaos',
  },
  perf: {
    title: 'Relentless Learning Machine (RLM)',
    content:
      "Absorbs knowledge at lightning speed and somehow still has energy left to ask one more question.",
  },
};

const codeExamples: Record<
  string,
  { code: string; filename: string; lang: 'css' | 'astro' | 'typescript' | 'javascript' }
> = {
  theming: {
    lang: 'css',
    code: `echo "Where is my keyboard?!";`,
    filename: 'src/family/father',
  },
  seo: {
    lang: 'css',
    code: `echo "Where are my students?!";`,
    filename: 'src/family/mother',
  },
  perf: {
    lang: 'css',
    code: `echo "Where are my books?!";`,
    filename: 'src/family/daughter',
  },  
};

// Simple syntax highlighter
function highlightCode(code: string, lang: string): React.ReactNode[] {
  const lines = code.split('\n');

  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let keyIndex = 0;

    const addToken = (text: string, className?: string) => {
      if (text) {
        tokens.push(
          <span key={`${lineIndex}-${keyIndex++}`} className={className}>
            {text}
          </span>
        );
      }
    };

    // Process the line character by character with regex patterns
    while (remaining.length > 0) {
      let matched = false;

      // Comments (// and /* */)
      const commentMatch = remaining.match(/^(\/\/.*|\/\*[\s\S]*?\*\/)/);
      if (commentMatch) {
        addToken(commentMatch[0], 'text-foreground-muted italic');
        remaining = remaining.slice(commentMatch[0].length);
        matched = true;
        continue;
      }

      // HTML comments
      const htmlCommentMatch = remaining.match(/^(<!--[\s\S]*?-->)/);
      if (htmlCommentMatch) {
        addToken(htmlCommentMatch[0], 'text-foreground-muted italic');
        remaining = remaining.slice(htmlCommentMatch[0].length);
        matched = true;
        continue;
      }

      // Strings (single, double, template)
      const stringMatch = remaining.match(/^(['"`])(?:(?!\1)[^\\]|\\.)*\1/);
      if (stringMatch) {
        addToken(stringMatch[0], 'text-green-600 dark:text-green-400');
        remaining = remaining.slice(stringMatch[0].length);
        matched = true;
        continue;
      }

      // Astro frontmatter delimiters
      if (remaining.startsWith('---')) {
        addToken('---', 'text-purple-600 dark:text-purple-400 font-semibold');
        remaining = remaining.slice(3);
        matched = true;
        continue;
      }

      // HTML/JSX tags
      const tagMatch = remaining.match(/^(<\/?[\w-]+|>|\/>)/);
      if (tagMatch) {
        addToken(tagMatch[0], 'text-pink-600 dark:text-pink-400');
        remaining = remaining.slice(tagMatch[0].length);
        matched = true;
        continue;
      }

      // CSS at-rules (@theme, @import, etc.)
      const atRuleMatch = remaining.match(/^(@[\w-]+)/);
      if (atRuleMatch) {
        addToken(atRuleMatch[0], 'text-purple-600 dark:text-purple-400 font-semibold');
        remaining = remaining.slice(atRuleMatch[0].length);
        matched = true;
        continue;
      }

      // Keywords
      const keywordMatch = remaining.match(
        /^(const|let|var|function|return|import|export|from|interface|type|class|extends|implements|new|async|await|if|else|for|while|switch|case|break|default|try|catch|finally|throw|typeof|instanceof|in|of|as|readonly|public|private|protected)\b/
      );
      if (keywordMatch) {
        addToken(keywordMatch[0], 'text-purple-600 dark:text-purple-400 font-semibold');
        remaining = remaining.slice(keywordMatch[0].length);
        matched = true;
        continue;
      }

      // Boolean/null
      const boolMatch = remaining.match(/^(true|false|null|undefined)\b/);
      if (boolMatch) {
        addToken(boolMatch[0], 'text-orange-700 dark:text-orange-300');
        remaining = remaining.slice(boolMatch[0].length);
        matched = true;
        continue;
      }

      // Numbers
      const numberMatch = remaining.match(/^(\d+\.?\d*)/);
      if (numberMatch) {
        addToken(numberMatch[0], 'text-orange-700 dark:text-orange-300');
        remaining = remaining.slice(numberMatch[0].length);
        matched = true;
        continue;
      }

      // CSS properties (word followed by colon)
      const cssPropMatch = remaining.match(/^([\w-]+)(:)/);
      if (cssPropMatch && (lang === 'css' || line.includes('{'))) {
        addToken(cssPropMatch[1], 'text-blue-600 dark:text-blue-400');
        addToken(cssPropMatch[2], 'text-foreground-secondary');
        remaining = remaining.slice(cssPropMatch[0].length);
        matched = true;
        continue;
      }

      // CSS functions (var, oklch, etc.)
      const cssFuncMatch = remaining.match(
        /^(var|oklch|rgb|rgba|hsl|hsla|calc|url|clamp|min|max)(\()/
      );
      if (cssFuncMatch) {
        addToken(cssFuncMatch[1], 'text-amber-700 dark:text-amber-300');
        addToken(cssFuncMatch[2], 'text-foreground-secondary');
        remaining = remaining.slice(cssFuncMatch[0].length);
        matched = true;
        continue;
      }

      // Function calls
      const funcMatch = remaining.match(/^([\w]+)(\()/);
      if (funcMatch) {
        addToken(funcMatch[1], 'text-amber-700 dark:text-amber-300');
        addToken(funcMatch[2], 'text-foreground-secondary');
        remaining = remaining.slice(funcMatch[0].length);
        matched = true;
        continue;
      }

      // Type annotations after colon
      const typeMatch = remaining.match(/^(:\s*)([\w<>[\]|&]+)/);
      if (typeMatch) {
        addToken(typeMatch[1], 'text-foreground-secondary');
        addToken(typeMatch[2], 'text-cyan-700 dark:text-cyan-300');
        remaining = remaining.slice(typeMatch[0].length);
        matched = true;
        continue;
      }

      // Default: single character
      if (!matched) {
        addToken(remaining[0], 'text-foreground-secondary');
        remaining = remaining.slice(1);
      }
    }

    return tokens.length > 0 ? tokens : [<span key={lineIndex}> </span>];
  });
}

function CodeBlock({ code, filename, lang }: { code: string; filename: string; lang: string }) {
  const [copied, setCopied] = useState(false);
  const highlightedLines = highlightCode(code.trim(), lang);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group border-border bg-background-secondary relative w-full overflow-hidden rounded-md border font-mono text-xs shadow-sm">
      {/* Header */}
      <div className="border-border bg-background flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="bg-border-strong h-2 w-2 rounded-full" />
            <div className="bg-border-strong h-2 w-2 rounded-full" />
            <div className="bg-border-strong h-2 w-2 rounded-full" />
          </div>
          <span className="text-foreground-muted font-sans text-[10px] font-medium">
            {filename}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-foreground-muted hover:bg-secondary hover:text-foreground flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-medium transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-green-600" strokeWidth={2} />
              <span className="text-green-600">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" strokeWidth={2} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="bg-background overflow-x-auto p-3">
        <pre className="flex flex-col leading-5">
          {highlightedLines.map((lineTokens, i) => (
            <div key={i} className="table-row">
              <span className="text-foreground-subtle table-cell w-6 pr-3 text-right text-[10px] select-none">
                {i + 1}
              </span>
              <span className="table-cell whitespace-pre">{lineTokens}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

// Tab definitions with icons for VerticalTabs
const tabs: VerticalTab[] = [
  { id: 'theming', label: 'U', description: 'Fathr', icon: Search },
  { id: 'seo', label: 'T', description: 'Mothr', icon: Search },
  { id: 'perf', label: 'L', description: 'Daugthr', icon: Search },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('theming');

  return (
    <section id="features" className="bg-background relative overflow-hidden py-[var(--space-section)]">
      {/* Decorative logomark watermark */}
      <div
        className="pointer-events-none absolute -top-8 right-8 hidden h-[28rem] w-[28rem] opacity-[0.04] grayscale md:block lg:top-10 lg:right-24 lg:h-[44rem] lg:w-[44rem] dark:opacity-[0.06]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 90 101" fill="none" className="h-full w-full">
          <path
            d="M35.1288 23.8398L45.1667 49.4151L56.2482 23.8398H87.1082C86.5647 23.3764 85.9776 22.9637 85.3616 22.5944L48.6165 0.704798C46.377 -0.0699896 43.4273 -0.439281 41.2675 0.842377L3.36286 23.3692C3.13819 23.5067 2.92801 23.666 2.72508 23.8326H35.1288V23.8398Z"
            fill="currentColor"
          />
          <path
            d="M0.144951 28.8578C0.079723 29.2851 0.0434853 29.7123 0.0434853 30.1323L0 72.036C0 76.1778 1.95684 78.3936 5.26172 80.3631L39.4919 100.703L0.144951 28.8578Z"
            fill="currentColor"
          />
          <path
            d="M89.9203 28.7058L50.0588 101L86.6661 79.1539C88.7027 77.9374 90 75.0265 90 72.6442L89.9783 29.6037C89.9783 29.2923 89.9493 28.9954 89.913 28.6985L89.9203 28.7058Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-[var(--space-section-header)]">
          <h2 className="font-display text-foreground text-3xl font-bold md:text-4xl">
            capaul.com: everything you need.
            <br />
            <span className="text-brand-500">nothing you don't.</span>
          </h2>
          <p className="text-foreground-muted mt-4 max-w-2xl text-lg">
            Get in touch with us.
          </p>
        </div>

        {/* Vertical Tabs */}
        <VerticalTabs tabs={tabs} value={activeTab} onChange={setActiveTab} mobileVariant="sheet">
          {tabs.map((tab) => (
            <div key={tab.id} data-tab-content={tab.id}>
              <div className="mb-[var(--space-heading-gap)]">
                <h3 className="text-foreground text-xl font-bold">{tabContent[tab.id].title}</h3>
                <p className="text-foreground-muted mt-2">{tabContent[tab.id].content}</p>
              </div>
              <CodeBlock
                code={codeExamples[tab.id].code}
                filename={codeExamples[tab.id].filename}
                lang={codeExamples[tab.id].lang}
              />
            </div>
          ))}
        </VerticalTabs>
      </div>
    </section>
  );
}

export default FeatureTabs;
