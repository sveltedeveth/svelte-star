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
export type DiBracketsProps = typeof __propDef.props;
export type DiBracketsEvents = typeof __propDef.events;
export type DiBracketsSlots = typeof __propDef.slots;
export default class DiBrackets extends SvelteComponentTyped<DiBracketsProps, DiBracketsEvents, DiBracketsSlots> {
}
export {};
