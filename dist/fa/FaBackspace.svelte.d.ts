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
export type FaBackspaceProps = typeof __propDef.props;
export type FaBackspaceEvents = typeof __propDef.events;
export type FaBackspaceSlots = typeof __propDef.slots;
export default class FaBackspace extends SvelteComponentTyped<FaBackspaceProps, FaBackspaceEvents, FaBackspaceSlots> {
}
export {};
