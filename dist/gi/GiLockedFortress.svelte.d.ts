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
export type GiLockedFortressProps = typeof __propDef.props;
export type GiLockedFortressEvents = typeof __propDef.events;
export type GiLockedFortressSlots = typeof __propDef.slots;
export default class GiLockedFortress extends SvelteComponentTyped<GiLockedFortressProps, GiLockedFortressEvents, GiLockedFortressSlots> {
}
export {};
