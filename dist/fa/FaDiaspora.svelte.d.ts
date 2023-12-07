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
export type FaDiasporaProps = typeof __propDef.props;
export type FaDiasporaEvents = typeof __propDef.events;
export type FaDiasporaSlots = typeof __propDef.slots;
export default class FaDiaspora extends SvelteComponentTyped<FaDiasporaProps, FaDiasporaEvents, FaDiasporaSlots> {
}
export {};
