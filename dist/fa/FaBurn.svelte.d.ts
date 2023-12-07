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
export type FaBurnProps = typeof __propDef.props;
export type FaBurnEvents = typeof __propDef.events;
export type FaBurnSlots = typeof __propDef.slots;
export default class FaBurn extends SvelteComponentTyped<FaBurnProps, FaBurnEvents, FaBurnSlots> {
}
export {};
