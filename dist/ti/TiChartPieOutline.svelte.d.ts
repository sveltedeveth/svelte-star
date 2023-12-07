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
export type TiChartPieOutlineProps = typeof __propDef.props;
export type TiChartPieOutlineEvents = typeof __propDef.events;
export type TiChartPieOutlineSlots = typeof __propDef.slots;
export default class TiChartPieOutline extends SvelteComponentTyped<TiChartPieOutlineProps, TiChartPieOutlineEvents, TiChartPieOutlineSlots> {
}
export {};
