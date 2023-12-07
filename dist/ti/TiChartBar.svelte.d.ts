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
export type TiChartBarProps = typeof __propDef.props;
export type TiChartBarEvents = typeof __propDef.events;
export type TiChartBarSlots = typeof __propDef.slots;
export default class TiChartBar extends SvelteComponentTyped<TiChartBarProps, TiChartBarEvents, TiChartBarSlots> {
}
export {};
