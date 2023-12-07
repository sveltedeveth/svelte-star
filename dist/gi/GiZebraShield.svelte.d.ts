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
export type GiZebraShieldProps = typeof __propDef.props;
export type GiZebraShieldEvents = typeof __propDef.events;
export type GiZebraShieldSlots = typeof __propDef.slots;
export default class GiZebraShield extends SvelteComponentTyped<GiZebraShieldProps, GiZebraShieldEvents, GiZebraShieldSlots> {
}
export {};
