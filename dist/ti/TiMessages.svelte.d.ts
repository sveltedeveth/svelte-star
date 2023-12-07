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
export type TiMessagesProps = typeof __propDef.props;
export type TiMessagesEvents = typeof __propDef.events;
export type TiMessagesSlots = typeof __propDef.slots;
export default class TiMessages extends SvelteComponentTyped<TiMessagesProps, TiMessagesEvents, TiMessagesSlots> {
}
export {};
