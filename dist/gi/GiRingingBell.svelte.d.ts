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
export type GiRingingBellProps = typeof __propDef.props;
export type GiRingingBellEvents = typeof __propDef.events;
export type GiRingingBellSlots = typeof __propDef.slots;
export default class GiRingingBell extends SvelteComponentTyped<GiRingingBellProps, GiRingingBellEvents, GiRingingBellSlots> {
}
export {};
