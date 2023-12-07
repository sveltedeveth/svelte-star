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
export type GiBrainProps = typeof __propDef.props;
export type GiBrainEvents = typeof __propDef.events;
export type GiBrainSlots = typeof __propDef.slots;
export default class GiBrain extends SvelteComponentTyped<GiBrainProps, GiBrainEvents, GiBrainSlots> {
}
export {};
