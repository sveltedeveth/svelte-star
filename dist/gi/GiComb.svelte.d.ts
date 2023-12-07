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
export type GiCombProps = typeof __propDef.props;
export type GiCombEvents = typeof __propDef.events;
export type GiCombSlots = typeof __propDef.slots;
export default class GiComb extends SvelteComponentTyped<GiCombProps, GiCombEvents, GiCombSlots> {
}
export {};
