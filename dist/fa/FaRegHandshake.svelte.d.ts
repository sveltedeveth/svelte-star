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
export type FaRegHandshakeProps = typeof __propDef.props;
export type FaRegHandshakeEvents = typeof __propDef.events;
export type FaRegHandshakeSlots = typeof __propDef.slots;
export default class FaRegHandshake extends SvelteComponentTyped<FaRegHandshakeProps, FaRegHandshakeEvents, FaRegHandshakeSlots> {
}
export {};
