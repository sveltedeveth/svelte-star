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
export type FaCodiepieProps = typeof __propDef.props;
export type FaCodiepieEvents = typeof __propDef.events;
export type FaCodiepieSlots = typeof __propDef.slots;
export default class FaCodiepie extends SvelteComponentTyped<FaCodiepieProps, FaCodiepieEvents, FaCodiepieSlots> {
}
export {};
