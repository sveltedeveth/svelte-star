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
export type TiChartBarOutlineProps = typeof __propDef.props;
export type TiChartBarOutlineEvents = typeof __propDef.events;
export type TiChartBarOutlineSlots = typeof __propDef.slots;
export default class TiChartBarOutline extends SvelteComponentTyped<TiChartBarOutlineProps, TiChartBarOutlineEvents, TiChartBarOutlineSlots> {
}
export {};
