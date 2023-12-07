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
export type GiDodgeProps = typeof __propDef.props;
export type GiDodgeEvents = typeof __propDef.events;
export type GiDodgeSlots = typeof __propDef.slots;
export default class GiDodge extends SvelteComponentTyped<GiDodgeProps, GiDodgeEvents, GiDodgeSlots> {
}
export {};
