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
export type GiBookAuraProps = typeof __propDef.props;
export type GiBookAuraEvents = typeof __propDef.events;
export type GiBookAuraSlots = typeof __propDef.slots;
export default class GiBookAura extends SvelteComponentTyped<GiBookAuraProps, GiBookAuraEvents, GiBookAuraSlots> {
}
export {};
