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
export type FaKeycdnProps = typeof __propDef.props;
export type FaKeycdnEvents = typeof __propDef.events;
export type FaKeycdnSlots = typeof __propDef.slots;
export default class FaKeycdn extends SvelteComponentTyped<FaKeycdnProps, FaKeycdnEvents, FaKeycdnSlots> {
}
export {};
