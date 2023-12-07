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
export type TiMessageProps = typeof __propDef.props;
export type TiMessageEvents = typeof __propDef.events;
export type TiMessageSlots = typeof __propDef.slots;
export default class TiMessage extends SvelteComponentTyped<TiMessageProps, TiMessageEvents, TiMessageSlots> {
}
export {};
