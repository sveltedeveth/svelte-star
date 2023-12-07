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
export type GiUncertaintyProps = typeof __propDef.props;
export type GiUncertaintyEvents = typeof __propDef.events;
export type GiUncertaintySlots = typeof __propDef.slots;
export default class GiUncertainty extends SvelteComponentTyped<GiUncertaintyProps, GiUncertaintyEvents, GiUncertaintySlots> {
}
export {};
