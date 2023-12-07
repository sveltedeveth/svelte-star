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
export type GiBunkerProps = typeof __propDef.props;
export type GiBunkerEvents = typeof __propDef.events;
export type GiBunkerSlots = typeof __propDef.slots;
export default class GiBunker extends SvelteComponentTyped<GiBunkerProps, GiBunkerEvents, GiBunkerSlots> {
}
export {};
