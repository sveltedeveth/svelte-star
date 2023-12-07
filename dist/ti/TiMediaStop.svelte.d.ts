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
export type TiMediaStopProps = typeof __propDef.props;
export type TiMediaStopEvents = typeof __propDef.events;
export type TiMediaStopSlots = typeof __propDef.slots;
export default class TiMediaStop extends SvelteComponentTyped<TiMediaStopProps, TiMediaStopEvents, TiMediaStopSlots> {
}
export {};
