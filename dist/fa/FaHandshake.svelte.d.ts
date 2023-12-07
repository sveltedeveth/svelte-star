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
export type FaHandshakeProps = typeof __propDef.props;
export type FaHandshakeEvents = typeof __propDef.events;
export type FaHandshakeSlots = typeof __propDef.slots;
export default class FaHandshake extends SvelteComponentTyped<FaHandshakeProps, FaHandshakeEvents, FaHandshakeSlots> {
}
export {};
