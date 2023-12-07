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
export type GiShieldProps = typeof __propDef.props;
export type GiShieldEvents = typeof __propDef.events;
export type GiShieldSlots = typeof __propDef.slots;
export default class GiShield extends SvelteComponentTyped<GiShieldProps, GiShieldEvents, GiShieldSlots> {
}
export {};
