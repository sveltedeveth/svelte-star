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
export type FaUserShieldProps = typeof __propDef.props;
export type FaUserShieldEvents = typeof __propDef.events;
export type FaUserShieldSlots = typeof __propDef.slots;
export default class FaUserShield extends SvelteComponentTyped<FaUserShieldProps, FaUserShieldEvents, FaUserShieldSlots> {
}
export {};
