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
export type WiFireProps = typeof __propDef.props;
export type WiFireEvents = typeof __propDef.events;
export type WiFireSlots = typeof __propDef.slots;
export default class WiFire extends SvelteComponentTyped<WiFireProps, WiFireEvents, WiFireSlots> {
}
export {};
