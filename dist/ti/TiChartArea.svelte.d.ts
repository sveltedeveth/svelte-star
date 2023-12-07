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
export type TiChartAreaProps = typeof __propDef.props;
export type TiChartAreaEvents = typeof __propDef.events;
export type TiChartAreaSlots = typeof __propDef.slots;
export default class TiChartArea extends SvelteComponentTyped<TiChartAreaProps, TiChartAreaEvents, TiChartAreaSlots> {
}
export {};
