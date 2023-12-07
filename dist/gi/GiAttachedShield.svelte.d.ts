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
export type GiAttachedShieldProps = typeof __propDef.props;
export type GiAttachedShieldEvents = typeof __propDef.events;
export type GiAttachedShieldSlots = typeof __propDef.slots;
export default class GiAttachedShield extends SvelteComponentTyped<GiAttachedShieldProps, GiAttachedShieldEvents, GiAttachedShieldSlots> {
}
export {};
