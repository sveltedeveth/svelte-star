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
export type FaServerProps = typeof __propDef.props;
export type FaServerEvents = typeof __propDef.events;
export type FaServerSlots = typeof __propDef.slots;
export default class FaServer extends SvelteComponentTyped<FaServerProps, FaServerEvents, FaServerSlots> {
}
export {};
