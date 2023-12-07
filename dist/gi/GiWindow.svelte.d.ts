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
export type GiWindowProps = typeof __propDef.props;
export type GiWindowEvents = typeof __propDef.events;
export type GiWindowSlots = typeof __propDef.slots;
export default class GiWindow extends SvelteComponentTyped<GiWindowProps, GiWindowEvents, GiWindowSlots> {
}
export {};
