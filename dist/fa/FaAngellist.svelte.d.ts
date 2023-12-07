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
export type FaAngellistProps = typeof __propDef.props;
export type FaAngellistEvents = typeof __propDef.events;
export type FaAngellistSlots = typeof __propDef.slots;
export default class FaAngellist extends SvelteComponentTyped<FaAngellistProps, FaAngellistEvents, FaAngellistSlots> {
}
export {};
