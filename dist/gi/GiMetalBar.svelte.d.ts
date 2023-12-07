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
export type GiMetalBarProps = typeof __propDef.props;
export type GiMetalBarEvents = typeof __propDef.events;
export type GiMetalBarSlots = typeof __propDef.slots;
export default class GiMetalBar extends SvelteComponentTyped<GiMetalBarProps, GiMetalBarEvents, GiMetalBarSlots> {
}
export {};
