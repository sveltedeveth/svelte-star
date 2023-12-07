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
export type GiTemporaryShieldProps = typeof __propDef.props;
export type GiTemporaryShieldEvents = typeof __propDef.events;
export type GiTemporaryShieldSlots = typeof __propDef.slots;
export default class GiTemporaryShield extends SvelteComponentTyped<GiTemporaryShieldProps, GiTemporaryShieldEvents, GiTemporaryShieldSlots> {
}
export {};
