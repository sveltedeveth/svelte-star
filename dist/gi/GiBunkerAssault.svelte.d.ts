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
export type GiBunkerAssaultProps = typeof __propDef.props;
export type GiBunkerAssaultEvents = typeof __propDef.events;
export type GiBunkerAssaultSlots = typeof __propDef.slots;
export default class GiBunkerAssault extends SvelteComponentTyped<GiBunkerAssaultProps, GiBunkerAssaultEvents, GiBunkerAssaultSlots> {
}
export {};
