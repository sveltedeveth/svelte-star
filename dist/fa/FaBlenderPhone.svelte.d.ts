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
export type FaBlenderPhoneProps = typeof __propDef.props;
export type FaBlenderPhoneEvents = typeof __propDef.events;
export type FaBlenderPhoneSlots = typeof __propDef.slots;
export default class FaBlenderPhone extends SvelteComponentTyped<FaBlenderPhoneProps, FaBlenderPhoneEvents, FaBlenderPhoneSlots> {
}
export {};
