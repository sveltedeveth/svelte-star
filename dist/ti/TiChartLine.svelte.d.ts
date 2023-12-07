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
export type TiChartLineProps = typeof __propDef.props;
export type TiChartLineEvents = typeof __propDef.events;
export type TiChartLineSlots = typeof __propDef.slots;
export default class TiChartLine extends SvelteComponentTyped<TiChartLineProps, TiChartLineEvents, TiChartLineSlots> {
}
export {};
