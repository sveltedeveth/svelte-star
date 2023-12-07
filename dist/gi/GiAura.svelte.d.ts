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
export type GiAuraProps = typeof __propDef.props;
export type GiAuraEvents = typeof __propDef.events;
export type GiAuraSlots = typeof __propDef.slots;
export default class GiAura extends SvelteComponentTyped<GiAuraProps, GiAuraEvents, GiAuraSlots> {
}
export {};
