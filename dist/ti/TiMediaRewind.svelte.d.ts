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
export type TiMediaRewindProps = typeof __propDef.props;
export type TiMediaRewindEvents = typeof __propDef.events;
export type TiMediaRewindSlots = typeof __propDef.slots;
export default class TiMediaRewind extends SvelteComponentTyped<TiMediaRewindProps, TiMediaRewindEvents, TiMediaRewindSlots> {
}
export {};
