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
export type GiWingedShieldProps = typeof __propDef.props;
export type GiWingedShieldEvents = typeof __propDef.events;
export type GiWingedShieldSlots = typeof __propDef.slots;
export default class GiWingedShield extends SvelteComponentTyped<GiWingedShieldProps, GiWingedShieldEvents, GiWingedShieldSlots> {
}
export {};
