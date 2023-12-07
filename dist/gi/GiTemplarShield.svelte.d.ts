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
export type GiTemplarShieldProps = typeof __propDef.props;
export type GiTemplarShieldEvents = typeof __propDef.events;
export type GiTemplarShieldSlots = typeof __propDef.slots;
export default class GiTemplarShield extends SvelteComponentTyped<GiTemplarShieldProps, GiTemplarShieldEvents, GiTemplarShieldSlots> {
}
export {};
