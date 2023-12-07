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
export type FaUtensilSpoonProps = typeof __propDef.props;
export type FaUtensilSpoonEvents = typeof __propDef.events;
export type FaUtensilSpoonSlots = typeof __propDef.slots;
export default class FaUtensilSpoon extends SvelteComponentTyped<FaUtensilSpoonProps, FaUtensilSpoonEvents, FaUtensilSpoonSlots> {
}
export {};
