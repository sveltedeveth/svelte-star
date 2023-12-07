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
export type DiCodepenProps = typeof __propDef.props;
export type DiCodepenEvents = typeof __propDef.events;
export type DiCodepenSlots = typeof __propDef.slots;
export default class DiCodepen extends SvelteComponentTyped<DiCodepenProps, DiCodepenEvents, DiCodepenSlots> {
}
export {};
