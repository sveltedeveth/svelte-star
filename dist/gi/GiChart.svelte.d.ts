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
export type GiChartProps = typeof __propDef.props;
export type GiChartEvents = typeof __propDef.events;
export type GiChartSlots = typeof __propDef.slots;
export default class GiChart extends SvelteComponentTyped<GiChartProps, GiChartEvents, GiChartSlots> {
}
export {};
