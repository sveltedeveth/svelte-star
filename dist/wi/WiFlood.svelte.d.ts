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
export type WiFloodProps = typeof __propDef.props;
export type WiFloodEvents = typeof __propDef.events;
export type WiFloodSlots = typeof __propDef.slots;
export default class WiFlood extends SvelteComponentTyped<WiFloodProps, WiFloodEvents, WiFloodSlots> {
}
export {};
