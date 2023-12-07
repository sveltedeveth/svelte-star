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
export type FaChartAreaProps = typeof __propDef.props;
export type FaChartAreaEvents = typeof __propDef.events;
export type FaChartAreaSlots = typeof __propDef.slots;
export default class FaChartArea extends SvelteComponentTyped<FaChartAreaProps, FaChartAreaEvents, FaChartAreaSlots> {
}
export {};
