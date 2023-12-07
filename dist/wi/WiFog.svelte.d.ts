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
export type WiFogProps = typeof __propDef.props;
export type WiFogEvents = typeof __propDef.events;
export type WiFogSlots = typeof __propDef.slots;
export default class WiFog extends SvelteComponentTyped<WiFogProps, WiFogEvents, WiFogSlots> {
}
export {};
