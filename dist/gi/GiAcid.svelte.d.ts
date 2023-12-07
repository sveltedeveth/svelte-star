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
export type GiAcidProps = typeof __propDef.props;
export type GiAcidEvents = typeof __propDef.events;
export type GiAcidSlots = typeof __propDef.slots;
export default class GiAcid extends SvelteComponentTyped<GiAcidProps, GiAcidEvents, GiAcidSlots> {
}
export {};
