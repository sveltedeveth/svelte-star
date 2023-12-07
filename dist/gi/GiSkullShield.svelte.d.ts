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
export type GiSkullShieldProps = typeof __propDef.props;
export type GiSkullShieldEvents = typeof __propDef.events;
export type GiSkullShieldSlots = typeof __propDef.slots;
export default class GiSkullShield extends SvelteComponentTyped<GiSkullShieldProps, GiSkullShieldEvents, GiSkullShieldSlots> {
}
export {};
