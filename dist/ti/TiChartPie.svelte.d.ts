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
export type TiChartPieProps = typeof __propDef.props;
export type TiChartPieEvents = typeof __propDef.events;
export type TiChartPieSlots = typeof __propDef.slots;
export default class TiChartPie extends SvelteComponentTyped<TiChartPieProps, TiChartPieEvents, TiChartPieSlots> {
}
export {};
