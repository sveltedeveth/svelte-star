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
export type GiUnpluggedProps = typeof __propDef.props;
export type GiUnpluggedEvents = typeof __propDef.events;
export type GiUnpluggedSlots = typeof __propDef.slots;
export default class GiUnplugged extends SvelteComponentTyped<GiUnpluggedProps, GiUnpluggedEvents, GiUnpluggedSlots> {
}
export {};
