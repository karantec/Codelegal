import React, { useState } from "react";
import SuccessVideos from "./SuccessVideo";
import FeaturedBanner from "./FeatureBanner";

// ─── Shared styles ────────────────────────────────────────────────────────────
const thStyle = {
  padding: "10px 20px",
  textAlign: "left",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#475569",
  background: "rgba(255,255,255,0.02)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const tdStyle = {
  padding: "14px 20px",
  borderBottom: "1px solid rgba(255,255,255,0.04)",
  verticalAlign: "top",
  color: "#cbd5e1",
  lineHeight: "1.6",
};

const sessionLabelStyle = {
  fontWeight: 700,
  color: "#e2e8f0",
  fontSize: "13px",
  fontFamily: "'DM Mono', monospace",
  whiteSpace: "nowrap",
};

// ─── Primitive components ─────────────────────────────────────────────────────
function ResourceLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "#c7d2fe" : "#a5b4fc",
        textDecoration: "none",
        fontSize: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "3px 8px",
        borderRadius: "6px",
        background: hovered
          ? "rgba(165,180,252,0.18)"
          : "rgba(165,180,252,0.08)",
        border: `1px solid ${hovered ? "rgba(165,180,252,0.4)" : "rgba(165,180,252,0.15)"}`,
        transition: "all 0.2s",
        marginBottom: "4px",
        marginRight: "4px",
      }}
    >
      {children}
    </a>
  );
}

function Badge({ label, color }) {
  return (
    <span
      style={{
        fontSize: "10px",
        fontWeight: 700,
        padding: "3px 8px",
        borderRadius: "20px",
        background: `${color}22`,
        color,
        border: `1px solid ${color}44`,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ImportanceBadge({ text }) {
  return (
    <span
      style={{
        fontSize: "10px",
        fontWeight: 800,
        padding: "4px 10px",
        borderRadius: "20px",
        background: "rgba(239,68,68,0.15)",
        color: "#f87171",
        border: "1px solid rgba(239,68,68,0.35)",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      🔥 {text}
    </span>
  );
}

// ─── TableRow — defined before all section tables ─────────────────────────────
function TableRow({ session, content, resources, extra }) {
  const [hovered, setHovered] = useState(false);
  return (
    <tr
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.025)" : "transparent",
        transition: "background 0.15s",
      }}
    >
      <td style={{ ...tdStyle, ...sessionLabelStyle }}>{session}</td>
      <td style={tdStyle}>{content}</td>
      <td style={tdStyle}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {resources}
        </div>
      </td>
      {extra !== undefined && <td style={tdStyle}>{extra}</td>}
    </tr>
  );
}

// ─── Section tables ───────────────────────────────────────────────────────────
function HashingTable() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Session", "Content", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow
            session="Foundation"
            content="Hashing Part 0, 1, 2"
            resources={
              <>
                <ResourceLink href="https://drive.google.com/file/d/10ZssTVcwkRdsoGlZFPHBXvVZa6OROky8/view">
                  📹 Part 0
                </ResourceLink>
                <ResourceLink href="https://drive.google.com/file/d/1BEv_Ew72EPjLBV6XX6d2QvMF-hjfIkAI/view">
                  📹 Part 1
                </ResourceLink>
                <ResourceLink href="https://drive.google.com/file/d/15hLKYt41unWwucyIBHNgR4IzVUKpVAsS/view">
                  📹 Part 2
                </ResourceLink>
                <ResourceLink href="https://www.desiqna.in/hashing+find+frequency+of+each+number+in+the+array">
                  📖 Document
                </ResourceLink>
              </>
            }
          />
          <TableRow
            session="Sessions 0–9"
            content="Concept Building Sessions"
            resources={
              <>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <ResourceLink key={n} href="#">
                    📋 Session-{n}
                  </ResourceLink>
                ))}
              </>
            }
          />
          <TableRow
            session="Session 10"
            content="Amazon OA Session"
            resources={
              <>
                <ResourceLink href="#">📹 Part 1</ResourceLink>
                <ResourceLink href="#">📹 Part 2</ResourceLink>
                <ResourceLink href="#">📋 DOC</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 11"
            content="Zscaler OA"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 DOC</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 12"
            content="Interview Level"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 Doc 1</ResourceLink>
                <ResourceLink href="#">📋 Doc 2</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 13"
            content="Interview Level"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 DOC1</ResourceLink>
                <ResourceLink href="#">📋 DOC2</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Recap"
            content="Recap Session"
            resources={<ResourceLink href="#">📋 Video</ResourceLink>}
          />
          <TableRow
            session="Session 14"
            content="Interview Level"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 DOC</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 15"
            content="Interview Level"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 DOC</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 16"
            content="Interview Level"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 DOC</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 17"
            content="Hashing · Prefix Sum · Suffix Sum"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 Doc</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 18"
            content="Amazon OA 2025 P1"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 Doc</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 19"
            content="Hashing · Prefix Sum · Suffix Sum"
            resources={
              <>
                <ResourceLink href="#">📋 Video 1</ResourceLink>
                <ResourceLink href="#">📋 Video 2</ResourceLink>
                <ResourceLink href="#">📋 Doc</ResourceLink>
              </>
            }
          />
          <TableRow
            session="Session 20"
            content="LeetCode Contest"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 Doc</ResourceLink>
              </>
            }
          />
        </tbody>
      </table>
    </div>
  );
}

function BannerImages() {
  return (
    <div
      style={{
        width: "100%",
        padding: "0 24px",
        marginTop: "32px",
        marginBottom: "32px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <img
          src="https://res.cloudinary.com/dgfxvpxbr/image/upload/v1771404297/2_fahrwp.jpg"
          alt="Banner 1"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "12px",
            border: "1px solid rgba(59,130,246,0.2)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
        <img
          src="https://res.cloudinary.com/dgfxvpxbr/image/upload/v1771404297/1_smkovn.jpg"
          alt="Banner 2"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "12px",
            border: "1px solid rgba(59,130,246,0.2)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>
    </div>
  );
}

function TwoPointerTable() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Session", "Content", "Resources", "Tag"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow
            session="Master-class"
            content="Two Pointer Template + Master-class"
            resources={
              <>
                <ResourceLink href="#">📹 Master Video</ResourceLink>
                <ResourceLink href="#">📋 Very Imp Doc</ResourceLink>
              </>
            }
            extra={<ImportanceBadge text="Very Important" />}
          />
          <TableRow
            session="Foundation"
            content="Strong Foundational Video + Google Interview"
            resources={
              <>
                <ResourceLink href="#">📋 Video 1</ResourceLink>
                <ResourceLink href="#">📋 Google Interview Video</ResourceLink>
              </>
            }
            extra={<Badge label="Google" color="#4ade80" />}
          />
          <TableRow
            session="Microsoft OA"
            content="Microsoft Interview Session"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 Doc</ResourceLink>
              </>
            }
            extra={<Badge label="Microsoft" color="#60a5fa" />}
          />
          <TableRow
            session="Google SDE-3 Part 1"
            content="Google SDE-3 Interview Part 1"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 DOC</ResourceLink>
              </>
            }
            extra={<Badge label="Google" color="#4ade80" />}
          />
          <TableRow
            session="Google SDE-3 Part 2"
            content="Google SDE-3 Interview Part 2"
            resources={
              <>
                <ResourceLink href="#">📋 Video</ResourceLink>
                <ResourceLink href="#">📋 DOC</ResourceLink>
              </>
            }
            extra={<Badge label="Google" color="#4ade80" />}
          />
        </tbody>
      </table>
    </div>
  );
}

function BinarySearchTable() {
  const rows = [
    {
      s: "Session 1",
      l: "Interview Level",
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">Doc</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 2",
      l: "Interview Level",
      r: (
        <>
          <ResourceLink href="#">📹 Part 1</ResourceLink>
          <ResourceLink href="#">📹 Part 2</ResourceLink>
          <ResourceLink href="#">📋 Doc</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 3",
      l: "Interview Level",
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 4",
      l: "Interview Level",
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 5",
      l: "Interview Level",
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 6",
      l: "Microsoft OA",
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">Doc</ResourceLink>
        </>
      ),
    },
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Session", "Level", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={row.s}
              session={row.s}
              content={<Badge label={row.l} color="#f97316" />}
              resources={row.r}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GreedyTable() {
  const rows = [
    {
      t: "Introduction",
      c: "Intro + LeetCode Contest",
      p: <Badge label="LeetCode" color="#f59e0b" />,
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC 0</ResourceLink>
          <ResourceLink href="#">📋 DOC 1</ResourceLink>
        </>
      ),
    },
    {
      t: "Advanced",
      c: "Codeforces (D) Problem Solving",
      p: <Badge label="Codeforces" color="#a78bfa" />,
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      t: "Competitive",
      c: "Codechef 1900+ Rated",
      p: <Badge label="CodeChef" color="#fbbf24" />,
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      t: "Industry OA",
      c: "IBM OA",
      p: <Badge label="IBM" color="#818cf8" />,
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      t: "Advanced",
      c: "Codechef Problem Session",
      p: <Badge label="CodeChef" color="#fbbf24" />,
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      t: "Hybrid",
      c: "Greedy + Intuition + Two Pointer",
      p: <Badge label="Goldman Sachs" color="#60a5fa" />,
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      t: "Advanced",
      c: "Greedy + Math Analysis",
      p: <Badge label="Atlassian 70LPA" color="#34d399" />,
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Topic", "Content", "Platform", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              session={row.t}
              content={
                <>
                  <div
                    style={{
                      color: "#e2e8f0",
                      marginBottom: "6px",
                      fontWeight: 500,
                    }}
                  >
                    {row.c}
                  </div>
                  {row.p}
                </>
              }
              resources={row.r}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RecursionTable() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Session", "Content", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow
            session="Session 1"
            content="Introduction (Explanation by Kumar K)"
            resources={
              <ResourceLink href="https://youtu.be/vky0RHci1Oc">
                Video
              </ResourceLink>
            }
          />
        </tbody>
      </table>
    </div>
  );
}

function DPTable() {
  const rows = [
    {
      s: "Session 1",
      l: <Badge label="Interview Level" color="#f97316" />,
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 2",
      l: <Badge label="Interview Level" color="#f97316" />,
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 3",
      l: <Badge label="Interview Level" color="#f97316" />,
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 4",
      l: <Badge label="AtCoder DP" color="#a78bfa" />,
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
          <ResourceLink href="#">AtCoder DP 1</ResourceLink>
          <ResourceLink href="#">AtCoder DP 2</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 5",
      l: <Badge label="PayPal OA" color="#60a5fa" />,
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Session", "Level", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={row.s}
              session={row.s}
              content={row.l}
              resources={row.r}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GraphTable() {
  const rows = [
    {
      s: "Intro",
      c: "Intro to graphs",
      r: (
        <>
          <ResourceLink href="#">Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 1",
      c: "BFS and its applications",
      r: <ResourceLink href="#">✅ Video</ResourceLink>,
    },
    {
      s: "Session 2",
      c: "BFS — Graph OA level (Thoughts + Intuition)",
      r: (
        <>
          <ResourceLink href="#">✅ Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 3",
      c: "BFS — Intermediate Level Trick + Understanding",
      r: (
        <>
          <ResourceLink href="#">✅ Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 4",
      c: "BFS — Uber SDE Interview 2025",
      r: (
        <>
          <ResourceLink href="#">✅ Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Session 5",
      c: "DFS Master Session (Thoughts + Process + Intuition)",
      r: (
        <>
          <ResourceLink href="#">✅ Video</ResourceLink>
          <ResourceLink href="#">DOC</ResourceLink>
        </>
      ),
    },
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Session", "Content", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={row.s}
              session={row.s}
              content={row.c}
              resources={row.r}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MathTable() {
  const rows = [
    {
      s: "Modulo Knowledge",
      c: "Fundamental concepts",
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Math (nCR)",
      c: "Foundational Concept",
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Factor + Prime Factor",
      c: "Intro 0",
      r: (
        <>
          <ResourceLink href="#">📋 Video</ResourceLink>
          <ResourceLink href="#">📋 DOC</ResourceLink>
        </>
      ),
    },
    {
      s: "Factor + Prime Factor",
      c: "Intro 1",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1ThcGpV6DVjrXG_J5sgsFKw6CN4a5FFkV/view?usp=sharing">
            📋 Video
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/15ZFZuxIGZgwbrT9NeBfUT00c-6KMjpuN-M7JRl8HFVI/edit?usp=sharing">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
    {
      s: "Factor + Prime Factor",
      c: "Codechef Contest P0, P1",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1ginV-ZWVf-iE_KBSRWeWaoMhnER0hTq0/view?usp=sharing">
            📋 Video 1
          </ResourceLink>
          <ResourceLink href="https://drive.google.com/file/d/1w6MQnIwMLYmFgq7SM04brNFxm7sAGKBd/view?usp=sharing">
            📋 Video 2
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/15ZFZuxIGZgwbrT9NeBfUT00c-6KMjpuN-M7JRl8HFVI/edit?usp=sharing">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
    {
      s: "Factor Optimization",
      c: "Google SDE-2 Interview",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1_85y4J9Qz4Nbm9M5Y3_j0TvcvNfBImoX/view?usp=sharing">
            📋 Video 1
          </ResourceLink>
          <ResourceLink href="https://drive.google.com/file/d/1eKbOeqZJTuA373LPW8RkVEJAy5TDEd0S/view?usp=sharing">
            📋 Video 2
          </ResourceLink>
          <ResourceLink href="https://drive.google.com/file/d/15je83OPb5H1Frc91tQ6CxNcun38rQlbX/view?usp=sharing">
            📋 Video 3
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/1lL9K7c5REKXIl6PKm7AV__hH5n6jU5B8XJTNus9Km5s/edit?tab=t.0">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Topic", "Content", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              session={row.s}
              content={row.c}
              resources={row.r}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TreesTable() {
  const rows = [
    {
      s: "Session 1",
      c: "Fundamental tree concepts",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1QsrOkTm1xPbRtMC0T78hPF6iXWkfOn1q/view?usp=sharing">
            📋 Video
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/1S8zLM0nvHY3OrIUwTjJAkg6misgu7CjIbIqYPMtdbnY/edit">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
    {
      s: "Session 2",
      c: "Advanced tree traversal",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1I8nsaqmppLqep38pzoShu44Kh-TWdulx/view?usp=sharing">
            📋 Video
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/11_n4swLlRGHHgVzZV9BCgpjZ5mpY5BHLuS1gp7PTazk/edit">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
    {
      s: "Session 3",
      c: "Google SWE Intern OA",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1Sa1XGzsWO-l2avRs4L02al04abY7KCnQ/view?usp=sharing">
            📋 Video
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/1yV1H5gJBn7SVYXiWOLL_kSWHZA-2bDrjjyF8MLRMW_I/edit?tab=t.0">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
    {
      s: "Session 4",
      c: "Tree optimization techniques",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1XxylhrHq02FVYXna66dj5FnUN75SNAjG/view?usp=sharing">
            📋 Video
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/11_n4swLlRGHHgVzZV9BCgpjZ5mpY5BHLuS1gp7PTazk/edit">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
    {
      s: "Session 5",
      c: "VmWare OA",
      r: (
        <>
          <ResourceLink href="https://drive.google.com/file/d/1JodwZaaFIYxXsg6qVbMVg_vz7HcfnNzd/view?usp=sharing">
            📋 Video
          </ResourceLink>
          <ResourceLink href="https://docs.google.com/document/d/1e3HmIlhVlT4-WEzNy5TMb0k3DLW6jZdOzy584guWgyw/edit">
            📋 DOC
          </ResourceLink>
        </>
      ),
    },
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}
      >
        <thead>
          <tr>
            {["Session", "Content", "Resources"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={row.s}
              session={row.s}
              content={row.c}
              resources={row.r}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Section metadata ─────────────────────────────────────────────────────
const SECTION_META = [
  {
    key: "hashing",
    icon: "🔢",
    label: "Hashing · Prefix Sum · Suffix Sum",
    accent: "#7C3AED",
    glow: "rgba(124,58,237,0.25)",
    sessions: 20,
    tag: "Foundation",
    Table: HashingTable,
  },
  {
    key: "twoPointer",
    icon: "👉",
    label: "Two Pointer",
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.25)",
    sessions: 5,
    tag: "Core",
    Table: TwoPointerTable,
  },
  {
    key: "binarySearch",
    icon: "🔍",
    label: "Binary Search",
    accent: "#EF4444",
    glow: "rgba(239,68,68,0.25)",
    sessions: 6,
    tag: "Core",
    Table: BinarySearchTable,
  },
  {
    key: "greedy",
    icon: "🎯",
    label: "Greedy Algorithms",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.25)",
    sessions: 7,
    tag: "Advanced",
    Table: GreedyTable,
  },
  {
    key: "recursion",
    icon: "🌀",
    label: "Recursion",
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.25)",
    sessions: 1,
    tag: "Foundation",
    Table: RecursionTable,
  },
  {
    key: "dp",
    icon: "📊",
    label: "Dynamic Programming",
    accent: "#06B6D4",
    glow: "rgba(6,182,212,0.25)",
    sessions: 5,
    tag: "Advanced",
    Table: DPTable,
  },
  {
    key: "graph",
    icon: "🕸️",
    label: "Graph",
    accent: "#10B981",
    glow: "rgba(16,185,129,0.25)",
    sessions: 6,
    tag: "Advanced",
    Table: GraphTable,
  },
  {
    key: "math",
    icon: "🧮",
    label: "Math",
    accent: "#F97316",
    glow: "rgba(249,115,22,0.25)",
    sessions: 6,
    tag: "Core",
    Table: MathTable,
  },
  {
    key: "trees",
    icon: "🌳",
    label: "Trees",
    accent: "#22C55E",
    glow: "rgba(34,197,94,0.25)",
    sessions: 5,
    tag: "Advanced",
    Table: TreesTable,
  },
];

const TOTAL_SESSIONS = SECTION_META.reduce((a, b) => a + b.sessions, 0);

// ─── Section accordion header ─────────────────────────────────────────────────
function SectionHeader({ meta, isOpen, onToggle }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={() => onToggle(meta.key)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        padding: "20px 28px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        transition: "all 0.3s",
        borderBottom: isOpen ? `1px solid ${meta.accent}33` : "none",
        background: isOpen
          ? `linear-gradient(135deg, ${meta.accent}22, ${meta.accent}08)`
          : hovered
            ? `${meta.accent}10`
            : "transparent",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          flexShrink: 0,
          background: `${meta.accent}20`,
          border: `1px solid ${meta.accent}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          boxShadow: isOpen ? `0 0 16px ${meta.glow}` : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        {meta.icon}
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#f1f5f9",
            letterSpacing: "-0.2px",
          }}
        >
          {meta.label}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#64748b",
            marginTop: "2px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>{meta.sessions} sessions</span>
          <span
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#475569",
              display: "inline-block",
            }}
          />
          <span
            style={{ color: meta.accent, fontWeight: 600, fontSize: "11px" }}
          >
            {meta.tag}
          </span>
        </div>
      </div>

      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: isOpen ? `${meta.accent}22` : "rgba(255,255,255,0.05)",
          border: `1px solid ${isOpen ? meta.accent + "44" : "rgba(255,255,255,0.1)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isOpen ? meta.accent : "#475569",
          fontSize: "14px",
          transition: "all 0.3s",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        ▾
      </div>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DSAStudyPlanner() {
  const initOpen = Object.fromEntries(
    SECTION_META.map((m, i) => [m.key, i === 0]),
  );
  const [openSections, setOpenSections] = useState(initOpen);

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const jumpTo = (key) => {
    setOpenSections((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((k) => [k, false])),
      [key]: true,
    }));
    setTimeout(() => {
      document
        .getElementById(`section-${key}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020817 0%, #0a1628 40%, #0d1f3c 100%)",
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        color: "#e2e8f0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow orbs */}
      <div
        style={{
          position: "fixed",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-200px",
          left: "-200px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle,rgba(16,185,129,0.06) 0%,transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ padding: "40px 0 32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                boxShadow: "0 0 20px rgba(99,102,241,0.4)",
              }}
            >
              ⚖️
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: "18px",
                letterSpacing: "-0.5px",
                background: "linear-gradient(135deg,#6366f1,#a5b4fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CodeLegal
            </span>
            <div
              style={{
                marginLeft: "6px",
                fontSize: "10px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "20px",
                background: "rgba(99,102,241,0.15)",
                color: "#818cf8",
                border: "1px solid rgba(99,102,241,0.3)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              DSA Curriculum
            </div>
          </div>
          <h1
            style={{
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginBottom: "12px",
              background: "linear-gradient(135deg,#f1f5f9 20%,#94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kumar K DSA + OA + CP sheet
          </h1>
          <div className="max-w-4xl mx-auto text-center py-12 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built After Deep Industry-Level Analysis
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              This sheet has been meticulously curated after an in-depth
              analysis of
              <span className="text-white font-semibold">
                {" "}
                Online Assessments and Interview questions{" "}
              </span>
              asked at leading product-based companies such as
              <span className="text-white font-semibold">
                {" "}
                Amazon, Google, Microsoft, Apple{" "}
              </span>
              and many more for the 2025–2026 hiring cycles.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Additionally, recent trends and patterns observed in
              <span className="text-white font-semibold">
                {" "}
                Codeforces and LeetCode contests{" "}
              </span>
              have been carefully studied and incorporated to ensure this sheet
              aligns with current competitive programming and hiring standards.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-10">
            <div
              className="bg-white/10 backdrop-blur-lg border border-white/20 
                  shadow-2xl rounded-2xl p-8 
                  transition-all duration-300 hover:shadow-purple-500/20"
            >
              <h2 className="text-xl font-semibold text-white mb-6">
                🚀 This sheet will help you achieve:
              </h2>

              <ol className="space-y-4">
                <li className="flex items-start gap-3 text-gray-200">
                  <span
                    className="flex items-center justify-center 
                         w-7 h-7 rounded-full 
                         bg-gradient-to-r from-purple-500 to-indigo-500 
                         text-white text-sm font-semibold"
                  >
                    1
                  </span>
                  <span>
                    <span className="font-medium text-white">
                      DSA prep for Interview
                    </span>{" "}
                    <span className="text-gray-400">(till MAANG level)</span>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-200">
                  <span
                    className="flex items-center justify-center 
                         w-7 h-7 rounded-full 
                         bg-gradient-to-r from-purple-500 to-indigo-500 
                         text-white text-sm font-semibold"
                  >
                    2
                  </span>
                  <span>
                    <span className="font-medium text-white">
                      DSA prep for OA
                    </span>{" "}
                    <span className="text-gray-400">(till MAANG level)</span>
                  </span>
                </li>

                <li className="flex items-start gap-3 text-gray-200">
                  <span
                    className="flex items-center justify-center 
                         w-7 h-7 rounded-full 
                         bg-gradient-to-r from-purple-500 to-indigo-500 
                         text-white text-sm font-semibold"
                  >
                    3
                  </span>
                  <span>
                    <span className="font-medium text-white">
                      DSA prep for CP
                    </span>
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <SuccessVideos />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "28px",
            }}
          >
            {[
              { value: "9", label: "Topics", color: "#6366f1" },
              {
                value: `${TOTAL_SESSIONS}+`,
                label: "Sessions",
                color: "#0ea5e9",
              },
              { value: "FAANG", label: "Ready", color: "#10b981" },
              { value: "Live", label: "Monitored", color: "#f59e0b" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 18px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: stat.color,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Topic grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          {SECTION_META.map((meta) => (
            <button
              key={meta.key}
              onClick={() => jumpTo(meta.key)}
              style={{
                background: openSections[meta.key]
                  ? `${meta.accent}18`
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${openSections[meta.key] ? meta.accent + "50" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "12px",
                padding: "14px 16px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                boxShadow: openSections[meta.key]
                  ? `0 0 20px ${meta.glow}`
                  : "none",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "6px" }}>
                {meta.icon}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: openSections[meta.key] ? meta.accent : "#94a3b8",
                  marginBottom: "2px",
                }}
              >
                {meta.label}
              </div>
              <div style={{ fontSize: "11px", color: "#475569" }}>
                {meta.sessions} sessions
              </div>
            </button>
          ))}
        </div>

        {/* ── Accordion sections ── */}
        {SECTION_META.map((meta) => {
          const TableComponent = meta.Table;

          return (
            <React.Fragment key={meta.key}>
              <div
                id={`section-${meta.key}`}
                style={{
                  marginBottom: "16px",
                  borderRadius: "16px",
                  background: "rgba(15,23,42,0.8)",
                  border: `1px solid ${
                    openSections[meta.key]
                      ? meta.accent + "35"
                      : "rgba(255,255,255,0.07)"
                  }`,
                  overflow: "hidden",
                  backdropFilter: "blur(12px)",
                }}
              >
                <SectionHeader
                  meta={meta}
                  isOpen={openSections[meta.key]}
                  onToggle={toggleSection}
                />
                {openSections[meta.key] && <TableComponent />}
              </div>

              {/* 🔥 Insert Banner After Hashing Section */}
              {meta.key === "hashing" && <BannerImages />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
