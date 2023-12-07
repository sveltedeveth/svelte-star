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
export type GiBeamsAuraProps = typeof __propDef.props;
export type GiBeamsAuraEvents = typeof __propDef.events;
export type GiBeamsAuraSlots = typeof __propDef.slots;
export default class GiBeamsAura extends SvelteComponentTyped<GiBeamsAuraProps, GiBeamsAuraEvents, GiBeamsAuraSlots> {
}
export {};
