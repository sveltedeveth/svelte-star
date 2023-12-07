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
export type TiInfoLargeProps = typeof __propDef.props;
export type TiInfoLargeEvents = typeof __propDef.events;
export type TiInfoLargeSlots = typeof __propDef.slots;
export default class TiInfoLarge extends SvelteComponentTyped<TiInfoLargeProps, TiInfoLargeEvents, TiInfoLargeSlots> {
}
export {};
