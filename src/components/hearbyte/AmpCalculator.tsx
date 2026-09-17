import { useEffect, useRef, useState } from "react";

type Mode = "power" | "direct";

type Vals = {
  mode: Mode;
  powerLow: string;
  loadLow: string;
  powerHigh: string;
  loadHigh: string;
  ampVoltage: string;
  ampCurrent: string;
  ampPower: string;
  ampPowerLoad: string;
  hpImpedance: string;
  hpSensitivity: string;
  targetAvg: string;
  crestFactor: string;
  digitalGain: string;
};

type Results = {
  vRail: number;
  iCapMA: number;
  limitingWall: string;
  maxCleanVoltage: number;
  maxCleanPowerMW: number;
  maxCleanCurrentMA: number;
  saturationCeilingDb: number;
  targetVolumeDb: number;
  remainingHeadroomDb: number;
  steps: { title: string; lines: React.ReactNode[] }[];
};

const inputCls =
  "w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon-cyan focus:outline-none";
const labelCls = "mb-1 block text-xs font-semibold text-foreground/80";
const subtextCls = "mt-1 block text-xs leading-relaxed text-muted-foreground";
const formulaCls =
  "rounded border border-neon-cyan/30 bg-background/60 px-1.5 py-0.5 font-mono text-[0.85em] text-neon-cyan";

const Field = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) => (
  <div className="flex-1">
    <label htmlFor={id} className={labelCls}>
      {label}
    </label>
    <input
      id={id}
      type="number"
      step="any"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
    />
  </div>
);

const verificationRows: {
  model: string;
  spec: string;
  rows: [string, string, string, string, string, string][];
}[] = [
  {
    model: "Sundara (Original)",
    spec: "37 Ω / 94 dB/mW",
    rows: [
      ["A", "Voltage Rail", "6.12 V", "165.51 mA", "1013.51 mW", "124.06 dB"],
      ["B", "Current Saturation", "3.00 V", "81.08 mA", "243.24 mW", "117.86 dB"],
    ],
  },
  {
    model: "Sundara (2022 Spec)",
    spec: "32 Ω / 92 dB/mW",
    rows: [
      ["A", "Current Saturation", "5.54 V", "173.21 mA", "960.00 mW", "121.82 dB"],
      ["B", "Current Saturation", "2.59 V", "81.08 mA", "210.37 mW", "115.23 dB"],
    ],
  },
  {
    model: "AKG K371",
    spec: "32 Ω / 99 dB/mW",
    rows: [
      ["A", "Current Saturation", "5.54 V", "173.21 mA", "960.00 mW", "128.82 dB"],
      ["B", "Current Saturation", "2.59 V", "81.08 mA", "210.37 mW", "122.23 dB"],
    ],
  },
  {
    model: "Sennheiser HD 560S",
    spec: "120 Ω / 100.8 dB/mW",
    rows: [
      ["A", "Voltage Rail", "6.12 V", "51.03 mA", "312.50 mW", "125.75 dB"],
      ["B", "Voltage Rail", "4.00 V", "33.33 mA", "133.33 mW", "122.05 dB"],
    ],
  },
  {
    model: "Sennheiser HD 660S",
    spec: "150 Ω / 96 dB/mW",
    rows: [
      ["A", "Voltage Rail", "6.12 V", "40.82 mA", "250.00 mW", "119.98 dB"],
      ["B", "Voltage Rail", "4.00 V", "26.67 mA", "106.67 mW", "116.28 dB"],
    ],
  },
  {
    model: "Sennheiser HD 600",
    spec: "300 Ω / 97 dB/mW",
    rows: [
      ["A", "Voltage Rail", "6.12 V", "20.41 mA", "125.00 mW", "117.97 dB"],
      ["B", "Voltage Rail", "4.00 V", "13.33 mA", "53.33 mW", "114.27 dB"],
    ],
  },
];

const AmpCalculator = () => {
  const [mode, setMode] = useState<Mode>("power");
  const [powerLow, setPowerLow] = useState("480");
  const [loadLow, setLoadLow] = useState("16");
  const [powerHigh, setPowerHigh] = useState("125");
  const [loadHigh, setLoadHigh] = useState("300");
  const [ampVoltage, setAmpVoltage] = useState("4.0");
  const [ampCurrent, setAmpCurrent] = useState("81.08");
  const [ampPower, setAmpPower] = useState("240");
  const [ampPowerLoad, setAmpPowerLoad] = useState("");
  const [hpImpedance, setHpImpedance] = useState("37");
  const [hpSensitivity, setHpSensitivity] = useState("94");
  const [targetAvg, setTargetAvg] = useState("85");
  const [crestFactor, setCrestFactor] = useState("12");
  const [digitalGain, setDigitalGain] = useState("0");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runWith = (v: Vals) => {
    const {
      mode,
      powerLow,
      loadLow,
      powerHigh,
      loadHigh,
      ampVoltage,
      ampCurrent,
      ampPower,
      ampPowerLoad,
      hpImpedance,
      hpSensitivity,
      targetAvg,
      crestFactor,
      digitalGain,
    } = v;
    setError(null);

    const R_hp = parseFloat(hpImpedance);
    const sens = parseFloat(hpSensitivity);
    const avg = parseFloat(targetAvg) || 0;
    const crest = parseFloat(crestFactor) || 0;
    const gain = parseFloat(digitalGain) || 0;


    let vRail = 0;
    let iCapMA = 0;
    const steps: Results["steps"] = [];

    if (mode === "power") {
      const pLow = parseFloat(powerLow);
      const zLow = parseFloat(loadLow);
      const pHigh = parseFloat(powerHigh);
      const zHigh = parseFloat(loadHigh);
      if (!pLow || !zLow || !pHigh || !zHigh) {
        setError("Please fill in both power and load values for Mode A.");
        setResults(null);
        return;
      }
      iCapMA = Math.sqrt(pLow / 1000 / zLow) * 1000;
      vRail = Math.sqrt((pHigh / 1000) * zHigh);
      steps.push({
        title: "1. Hardware Rail Derivations (Mode A):",
        lines: [
          <>
            • Current Cap: <span className={formulaCls}>I_cap = √(P / Z)</span> → √(
            {(pLow / 1000).toFixed(4)} W / {zLow} Ω) ={" "}
            <strong className="text-neon-cyan">{iCapMA.toFixed(2)} mA RMS</strong>
          </>,
          <>
            • Voltage Rail: <span className={formulaCls}>V_rail = √(P × Z)</span> → √(
            {(pHigh / 1000).toFixed(4)} W × {zHigh} Ω) ={" "}
            <strong className="text-neon-cyan">{vRail.toFixed(2)} V RMS</strong>
          </>,
        ],
      });
    } else {
      vRail = parseFloat(ampVoltage);
      const defaultCurrent = parseFloat(ampCurrent);
      const p = parseFloat(ampPower);
      const overrideLoad = parseFloat(ampPowerLoad);

      if (!isNaN(overrideLoad) && overrideLoad > 0) {
        iCapMA = Math.sqrt(p / 1000 / overrideLoad) * 1000;
        steps.push({
          title: "1. Hardware Rail Inputs (Mode B — Load Override Active):",
          lines: [
            <>
              • Direct Voltage Rail:{" "}
              <strong className="text-neon-cyan">{vRail.toFixed(2)} V RMS</strong>
            </>,
            <>
              • Recalculated Current Cap: <span className={formulaCls}>I_cap = √(P / Z)</span>{" "}
              → √({(p / 1000).toFixed(4)} W / {overrideLoad} Ω) ={" "}
              <strong className="text-neon-cyan">{iCapMA.toFixed(2)} mA RMS</strong>
            </>,
          ],
        });
      } else {
        iCapMA = defaultCurrent;
        steps.push({
          title: "1. Hardware Rail Inputs (Mode B — Direct Limit Default):",
          lines: [
            <>
              • Direct Voltage Rail:{" "}
              <strong className="text-neon-cyan">{vRail.toFixed(2)} V RMS</strong>
            </>,
            <>
              • Current Ceiling Cap:{" "}
              <strong className="text-neon-cyan">{iCapMA.toFixed(2)} mA RMS</strong>
            </>,
            <>
              <em className="text-muted-foreground">
                (Defaults to the Qudelix reference spreadsheet ceiling because the spec sheet
                omits load impedance for the 240 mW rating.)
              </em>
            </>,
          ],
        });
      }
    }

    if (!vRail || !iCapMA || !R_hp || !sens) {
      setError("Please ensure all headphone and amplifier inputs are valid numbers.");
      setResults(null);
      return;
    }

    const vCurrentLimit = (iCapMA / 1000) * R_hp;
    let maxCleanVoltage: number;
    let limitingWall: string;
    if (vCurrentLimit < vRail) {
      maxCleanVoltage = vCurrentLimit;
      limitingWall = "Current Saturation (Analog Clipping)";
    } else {
      maxCleanVoltage = vRail;
      limitingWall = "Voltage Rail Cap";
    }

    const maxCleanCurrentMA = (maxCleanVoltage / R_hp) * 1000;
    const maxCleanPowerMW = (Math.pow(maxCleanVoltage, 2) / R_hp) * 1000;
    const saturationCeilingDb = sens + 10 * Math.log10(maxCleanPowerMW);
    const targetVolumeDb = avg + crest + gain;
    const remainingHeadroomDb = saturationCeilingDb - targetVolumeDb;

    steps.push({
      title: `2. Bottleneck Comparison for ${R_hp} Ω Load:`,
      lines: [
        <>
          • Voltage ceiling if limited by current: <span className={formulaCls}>V = I × R</span>{" "}
          → {(iCapMA / 1000).toFixed(5)} A × {R_hp} Ω ={" "}
          <strong className="text-neon-cyan">{vCurrentLimit.toFixed(2)} V RMS</strong>
        </>,
        <>
          • Compare: Voltage from Current Limit ({vCurrentLimit.toFixed(2)} V) vs. Voltage Rail
          Cap ({vRail.toFixed(2)} V)
        </>,
        <>
          • <strong>Bottleneck Result:</strong> Limited by{" "}
          <strong className="text-neon-magenta">{limitingWall}</strong> at{" "}
          <strong className="text-neon-cyan">{maxCleanVoltage.toFixed(2)} V RMS</strong>.
        </>,
      ],
    });

    steps.push({
      title: "3. Final Headphone Output Calculations:",
      lines: [
        <>
          • Max Clean Power: <span className={formulaCls}>P = (V² / R) × 1000</span> → (
          {maxCleanVoltage.toFixed(4)}² / {R_hp}) × 1000 ={" "}
          <strong className="text-neon-cyan">{maxCleanPowerMW.toFixed(2)} mW</strong>
        </>,
        <>
          • Max Clean Current: <span className={formulaCls}>I = (V / R) × 1000</span> → (
          {maxCleanVoltage.toFixed(4)} / {R_hp}) × 1000 ={" "}
          <strong className="text-neon-cyan">{maxCleanCurrentMA.toFixed(2)} mA</strong>
        </>,
        <>
          • Saturation Ceiling:{" "}
          <span className={formulaCls}>SPL = Sens + 10 × log10(P_mW)</span> → {sens} + 10 ×
          log10({maxCleanPowerMW.toFixed(2)}) ={" "}
          <strong className="text-neon-cyan">{saturationCeilingDb.toFixed(2)} dB SPL</strong>
        </>,
      ],
    });

    steps.push({
      title: "4. Target Volume & Headroom Analysis:",
      lines: [
        <>
          • Target Peak Volume:{" "}
          <span className={formulaCls}>
            Target SPL = Avg ({avg}) + Crest ({crest}) + Gain Red. ({gain})
          </span>{" "}
          = <strong className="text-neon-cyan">{targetVolumeDb.toFixed(2)} dB SPL</strong>
        </>,
        <>
          • Remaining Headroom:{" "}
          <span className={formulaCls}>
            Headroom = Saturation Ceiling ({saturationCeilingDb.toFixed(2)}) − Target Peak (
            {targetVolumeDb.toFixed(2)})
          </span>{" "}
          = <strong className="text-neon-cyan">{remainingHeadroomDb.toFixed(2)} dB</strong>
        </>,
      ],
    });

    setResults({
      vRail,
      iCapMA,
      limitingWall,
      maxCleanVoltage,
      maxCleanPowerMW,
      maxCleanCurrentMA,
      saturationCeilingDb,
      targetVolumeDb,
      remainingHeadroomDb,
      steps,
    });
  };

  const currentVals = (): Vals => ({
    mode,
    powerLow,
    loadLow,
    powerHigh,
    loadHigh,
    ampVoltage,
    ampCurrent,
    ampPower,
    ampPowerLoad,
    hpImpedance,
    hpSensitivity,
    targetAvg,
    crestFactor,
    digitalGain,
  });

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    runWith(currentVals());
  };

  // Allow other parts of the page to deep-link a fully pre-filled case, e.g.
  // #calculator?mode=A&pLow=49&zLow=16&pHigh=34&zHigh=32&z=32&sens=99&avg=85&crest=14&gain=3
  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash;
      const qIndex = hash.indexOf("?");
      if (!hash.startsWith("#calculator") || qIndex === -1) return;
      const q = new URLSearchParams(hash.slice(qIndex + 1));
      if (![...q.keys()].length) return;

      const next: Vals = { ...currentVals() };
      const modeParam = q.get("mode");
      if (modeParam) next.mode = modeParam.toUpperCase() === "B" ? "direct" : "power";

      const map: [string, keyof Vals][] = [
        ["pLow", "powerLow"],
        ["zLow", "loadLow"],
        ["pHigh", "powerHigh"],
        ["zHigh", "loadHigh"],
        ["vRail", "ampVoltage"],
        ["iCap", "ampCurrent"],
        ["ampP", "ampPower"],
        ["ampZ", "ampPowerLoad"],
        ["z", "hpImpedance"],
        ["sens", "hpSensitivity"],
        ["avg", "targetAvg"],
        ["crest", "crestFactor"],
        ["gain", "digitalGain"],
      ];
      for (const [param, key] of map) {
        const value = q.get(param);
        if (value !== null && key !== "mode") next[key] = value;
      }

      setMode(next.mode);
      setPowerLow(next.powerLow);
      setLoadLow(next.loadLow);
      setPowerHigh(next.powerHigh);
      setLoadHigh(next.loadHigh);
      setAmpVoltage(next.ampVoltage);
      setAmpCurrent(next.ampCurrent);
      setAmpPower(next.ampPower);
      setAmpPowerLoad(next.ampPowerLoad);
      setHpImpedance(next.hpImpedance);
      setHpSensitivity(next.hpSensitivity);
      setTargetAvg(next.targetAvg);
      setCrestFactor(next.crestFactor);
      setDigitalGain(next.digitalGain);
      runWith(next);

      window.requestAnimationFrame(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="max-w-3xl rounded-xl border border-border bg-card-gradient p-6">
      <form onSubmit={calculate} noValidate>
        <h3 className="font-display text-lg font-bold text-neon-cyan">
          1. Amplifier input mode
        </h3>
        <div className="mt-3 space-y-2 rounded-lg border border-neon-cyan/25 bg-background/40 p-4">
          <label className="flex cursor-pointer items-start gap-2 text-sm text-foreground/90">
            <input
              type="radio"
              name="inputMode"
              value="power"
              checked={mode === "power"}
              onChange={() => setMode("power")}
              className="mt-1 accent-[hsl(var(--neon-magenta))]"
            />
            <span>
              <strong className="text-neon-magenta">Mode A: Multi-Power Specs</strong> (e.g.
              FiiO QX13, FiiO JIEZI, Topping)
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-2 text-sm text-foreground/90">
            <input
              type="radio"
              name="inputMode"
              value="direct"
              checked={mode === "direct"}
              onChange={() => setMode("direct")}
              className="mt-1 accent-[hsl(var(--neon-magenta))]"
            />
            <span>
              <strong className="text-neon-magenta">Mode B: Direct Rail &amp; Current Limit</strong>{" "}
              (e.g. Qudelix 5K)
            </span>
          </label>
        </div>

        {mode === "power" ? (
          <div className="mt-4 space-y-4">
            <div>
              <span className="mb-1 block text-sm font-semibold text-foreground/90">
                Low-impedance spec (establishes hardware current cap):
              </span>
              <div className="flex gap-3">
                <Field id="powerLow" label="Power output (mW)" value={powerLow} onChange={setPowerLow} placeholder="e.g. 480" />
                <Field id="loadLow" label="Rated load (Ω)" value={loadLow} onChange={setLoadLow} placeholder="e.g. 16" />
              </div>
              <span className={subtextCls}>
                Enter the low-impedance rating (16 Ω or 32 Ω). Used to derive the current
                limit: I = √(P / Z)
              </span>
            </div>
            <div>
              <span className="mb-1 block text-sm font-semibold text-foreground/90">
                High-impedance spec (establishes hardware voltage rail):
              </span>
              <div className="flex gap-3">
                <Field id="powerHigh" label="Power output (mW)" value={powerHigh} onChange={setPowerHigh} placeholder="e.g. 125" />
                <Field id="loadHigh" label="Rated load (Ω)" value={loadHigh} onChange={setLoadHigh} placeholder="e.g. 300" />
              </div>
              <span className={subtextCls}>
                Enter the highest-impedance rating available. Used to derive the voltage
                limit: V = √(P × Z)
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="ampVoltage" className="mb-1 block text-sm font-semibold text-foreground/90">
                Max RMS voltage rail (V):
              </label>
              <input id="ampVoltage" type="number" step="any" value={ampVoltage} onChange={(e) => setAmpVoltage(e.target.value)} className={inputCls} />
              <span className={subtextCls}>
                Maximum clean voltage output published in the official specs (e.g. 4.0 V RMS).
              </span>
            </div>
            <div>
              <label htmlFor="ampCurrent" className="mb-1 block text-sm font-semibold text-foreground/90">
                Max output current (mA RMS) [spreadsheet default]:
              </label>
              <input id="ampCurrent" type="number" step="any" value={ampCurrent} onChange={(e) => setAmpCurrent(e.target.value)} className={inputCls} />
              <span className={subtextCls}>
                <strong>Note:</strong> standard spec sheets omit the rated load (Ω) for
                headline power numbers. The default 81.08 mA RMS comes directly from
                Qudelix's reference spreadsheet.
              </span>
            </div>
            <div className="rounded-lg border border-dashed border-neon-cyan/40 bg-background/40 p-4">
              <span className="mb-2 block text-sm font-semibold text-foreground/90">
                Optional override: recalculate current ceiling from a power spec
              </span>
              <div className="flex gap-3">
                <Field id="ampPower" label="Max power spec (mW)" value={ampPower} onChange={setAmpPower} placeholder="e.g. 240" />
                <Field id="ampPowerLoad" label="At load (Ω)" value={ampPowerLoad} onChange={setAmpPowerLoad} placeholder="e.g. 32" />
              </div>
              <span className={subtextCls}>
                If an "At load (Ω)" value is entered above, the 81.08 mA default is
                overridden using I = √(P / Z).
              </span>
            </div>
          </div>
        )}

        <h3 className="mt-8 font-display text-lg font-bold text-neon-cyan">
          2. Headphone specifications
        </h3>
        <div className="mt-3 space-y-4">
          <div>
            <label htmlFor="hpImpedance" className="mb-1 block text-sm font-semibold text-foreground/90">
              Headphone impedance (Ω):
            </label>
            <input id="hpImpedance" type="number" step="any" required value={hpImpedance} onChange={(e) => setHpImpedance(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="hpSensitivity" className="mb-1 block text-sm font-semibold text-foreground/90">
              Sensitivity (dB SPL / mW):
            </label>
            <input id="hpSensitivity" type="number" step="any" required value={hpSensitivity} onChange={(e) => setHpSensitivity(e.target.value)} className={inputCls} />
          </div>
        </div>

        <h3 className="mt-8 font-display text-lg font-bold text-neon-cyan">
          3. Listening &amp; headroom targets (optional)
        </h3>
        <div className="mt-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Field id="targetAvg" label="Target avg vol (dB SPL)" value={targetAvg} onChange={setTargetAvg} placeholder="e.g. 85" />
            <Field id="crestFactor" label="Crest factor (dB)" value={crestFactor} onChange={setCrestFactor} placeholder="e.g. 12-20" />
            <Field id="digitalGain" label="Digital gain red. (dB)" value={digitalGain} onChange={setDigitalGain} placeholder="e.g. -6 or 0" />
          </div>
          <span className={subtextCls}>
            Target Peak SPL = Target Avg (85 dB SPL reference) + Crest Factor (depending on
            music genre, e.g. 6 dB for EDM/hip-hop, 10 dB for pop/rock, 14 dB for
            jazz/acoustic, 18 dB for classical) + Digital Gain Reduction (ReplayGain volume
            normalization, e.g. −9 from Apple Music Sound Check, plus PEQ preamp settings,
            usually up to −10 dB).
          </span>
        </div>

        {error && (
          <p role="alert" className="mt-4 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-md border border-neon-magenta/60 bg-neon-magenta/10 px-4 py-3 font-display text-sm font-bold uppercase tracking-widest text-neon-magenta transition-smooth hover:bg-neon-magenta/20 hover:shadow-neon-magenta"
        >
          Calculate saturation point
        </button>
      </form>

      <div aria-live="polite">
        {results && (
          <div className="mt-6 rounded-lg border-l-4 border-neon-cyan bg-background/40 p-4">
            <h3 className="font-display text-base font-bold text-neon-magenta">
              Derived amp hardware limits
            </h3>
            <div className="mt-2 rounded-md border border-border bg-background/60 p-3 text-sm">
              <p>
                Hardware max voltage rail:{" "}
                <strong className="text-neon-cyan">{results.vRail.toFixed(2)}</strong> V RMS
              </p>
              <p className="mt-1">
                Hardware max current cap:{" "}
                <strong className="text-neon-cyan">{results.iCapMA.toFixed(2)}</strong> mA RMS
              </p>
            </div>

            <h3 className="mt-5 font-display text-base font-bold text-neon-magenta">
              Output results for headphone load
            </h3>
            <div className="mt-2 space-y-1 text-sm">
              <p>
                <strong>Limiting wall:</strong>{" "}
                <span className="font-semibold text-neon-cyan">{results.limitingWall}</span>
              </p>
              <p>
                <strong>Max clean voltage:</strong> {results.maxCleanVoltage.toFixed(2)} V RMS
              </p>
              <p>
                <strong>Max clean power:</strong> {results.maxCleanPowerMW.toFixed(2)} mW
              </p>
              <p>
                <strong>Max clean current:</strong> {results.maxCleanCurrentMA.toFixed(2)} mA
              </p>
              <p>
                <strong>Saturation ceiling:</strong>{" "}
                <span className="font-semibold text-neon-cyan">
                  {results.saturationCeilingDb.toFixed(2)} dB SPL
                </span>
              </p>
            </div>

            <div className="mt-4 border-t border-dashed border-border pt-3">
              <h3 className="font-display text-base font-bold text-neon-magenta">
                Listening target analysis
              </h3>
              <div className="mt-2 space-y-1 text-sm">
                <p>
                  <strong>Target peak volume:</strong> {results.targetVolumeDb.toFixed(2)} dB SPL
                </p>
                <p>
                  <strong>Remaining volume headroom:</strong>{" "}
                  <span
                    className={`font-semibold ${
                      results.remainingHeadroomDb >= 0 ? "text-neon-cyan" : "text-destructive"
                    }`}
                  >
                    {results.remainingHeadroomDb.toFixed(2)} dB
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-neon-orange/40 bg-neon-orange/5 p-4 text-sm">
              <h4 className="font-display text-sm font-bold text-neon-orange">
                Calculation &amp; formula breakdown
              </h4>
              <div className="mt-3 space-y-4">
                {results.steps.map((step) => (
                  <div key={step.title} className="leading-relaxed">
                    <strong className="text-foreground/90">{step.title}</strong>
                    <div className="mt-1 space-y-1 text-foreground/80">
                      {step.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background/40 p-4">
        <h3 className="font-display text-base font-bold text-neon-magenta">
          Reference verification bench
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Use these manually verified benchmark outputs to validate the calculator. All values
          are calculated against the default Mode A limits (
          <strong className="text-neon-cyan">V_rail: 6.12 V, I_cap: 173.21 mA</strong>) and Mode
          B limits (<strong className="text-neon-cyan">V_rail: 4.00 V, I_cap: 81.08 mA</strong>
          ).
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Headphone</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Mode</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Wall bottleneck</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Max V RMS</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Max current</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Max power</th>
                <th scope="col" className="py-2 font-semibold uppercase tracking-widest text-neon-cyan">Saturation SPL</th>
              </tr>
            </thead>
            <tbody>
              {verificationRows.map((hp) =>
                hp.rows.map((r, i) => (
                  <tr key={`${hp.model}-${r[0]}`} className="border-b border-border/60 last:border-b-0">
                    {i === 0 && (
                      <th scope="row" rowSpan={hp.rows.length} className="py-2 pr-3 align-top font-semibold text-neon-magenta">
                        {hp.model}
                        <span className="block text-[0.85em] font-normal text-muted-foreground">{hp.spec}</span>
                      </th>
                    )}
                    <td className="py-2 pr-3">
                      <span
                        className={`rounded px-1.5 py-0.5 font-semibold ${
                          r[0] === "A"
                            ? "bg-neon-orange/15 text-neon-orange"
                            : "bg-neon-cyan/15 text-neon-cyan"
                        }`}
                      >
                        Mode {r[0]}
                      </span>
                    </td>
                    <td className="py-2 pr-3 text-foreground/90">{r[1]}</td>
                    <td className="py-2 pr-3 text-foreground/90">{r[2]}</td>
                    <td className="py-2 pr-3 text-foreground/90">{r[3]}</td>
                    <td className="py-2 pr-3 text-foreground/90">{r[4]}</td>
                    <td className="py-2 font-semibold text-foreground">{r[5]}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AmpCalculator;
