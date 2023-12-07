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
export type FaChartLineProps = typeof __propDef.props;
export type FaChartLineEvents = typeof __propDef.events;
export type FaChartLineSlots = typeof __propDef.slots;
export default class FaChartLine extends SvelteComponentTyped<FaChartLineProps, FaChartLineEvents, FaChartLineSlots> {
}
export {};
