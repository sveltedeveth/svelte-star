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
export type GoShieldProps = typeof __propDef.props;
export type GoShieldEvents = typeof __propDef.events;
export type GoShieldSlots = typeof __propDef.slots;
export default class GoShield extends SvelteComponentTyped<GoShieldProps, GoShieldEvents, GoShieldSlots> {
}
export {};
