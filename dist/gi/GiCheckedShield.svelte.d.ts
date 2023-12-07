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
export type GiCheckedShieldProps = typeof __propDef.props;
export type GiCheckedShieldEvents = typeof __propDef.events;
export type GiCheckedShieldSlots = typeof __propDef.slots;
export default class GiCheckedShield extends SvelteComponentTyped<GiCheckedShieldProps, GiCheckedShieldEvents, GiCheckedShieldSlots> {
}
export {};
