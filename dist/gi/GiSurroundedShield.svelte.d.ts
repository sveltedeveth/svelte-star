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
export type GiSurroundedShieldProps = typeof __propDef.props;
export type GiSurroundedShieldEvents = typeof __propDef.events;
export type GiSurroundedShieldSlots = typeof __propDef.slots;
export default class GiSurroundedShield extends SvelteComponentTyped<GiSurroundedShieldProps, GiSurroundedShieldEvents, GiSurroundedShieldSlots> {
}
export {};
