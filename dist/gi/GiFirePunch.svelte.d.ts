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
export type GiFirePunchProps = typeof __propDef.props;
export type GiFirePunchEvents = typeof __propDef.events;
export type GiFirePunchSlots = typeof __propDef.slots;
export default class GiFirePunch extends SvelteComponentTyped<GiFirePunchProps, GiFirePunchEvents, GiFirePunchSlots> {
}
export {};
