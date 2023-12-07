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
export type GiBlackHandShieldProps = typeof __propDef.props;
export type GiBlackHandShieldEvents = typeof __propDef.events;
export type GiBlackHandShieldSlots = typeof __propDef.slots;
export default class GiBlackHandShield extends SvelteComponentTyped<GiBlackHandShieldProps, GiBlackHandShieldEvents, GiBlackHandShieldSlots> {
}
export {};
