import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaChartPieProps = typeof __propDef.props;
export type FaChartPieEvents = typeof __propDef.events;
export type FaChartPieSlots = typeof __propDef.slots;
export default class FaChartPie extends SvelteComponentTyped<FaChartPieProps, FaChartPieEvents, FaChartPieSlots> {
}
export {};
