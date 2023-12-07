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
export type TiBackspaceProps = typeof __propDef.props;
export type TiBackspaceEvents = typeof __propDef.events;
export type TiBackspaceSlots = typeof __propDef.slots;
export default class TiBackspace extends SvelteComponentTyped<TiBackspaceProps, TiBackspaceEvents, TiBackspaceSlots> {
}
export {};
