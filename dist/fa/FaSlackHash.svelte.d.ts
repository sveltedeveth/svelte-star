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
export type FaSlackHashProps = typeof __propDef.props;
export type FaSlackHashEvents = typeof __propDef.events;
export type FaSlackHashSlots = typeof __propDef.slots;
export default class FaSlackHash extends SvelteComponentTyped<FaSlackHashProps, FaSlackHashEvents, FaSlackHashSlots> {
}
export {};
