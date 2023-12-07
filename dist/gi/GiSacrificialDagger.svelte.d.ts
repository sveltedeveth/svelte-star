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
export type GiSacrificialDaggerProps = typeof __propDef.props;
export type GiSacrificialDaggerEvents = typeof __propDef.events;
export type GiSacrificialDaggerSlots = typeof __propDef.slots;
export default class GiSacrificialDagger extends SvelteComponentTyped<GiSacrificialDaggerProps, GiSacrificialDaggerEvents, GiSacrificialDaggerSlots> {
}
export {};
