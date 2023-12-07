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
export type FaSignatureProps = typeof __propDef.props;
export type FaSignatureEvents = typeof __propDef.events;
export type FaSignatureSlots = typeof __propDef.slots;
export default class FaSignature extends SvelteComponentTyped<FaSignatureProps, FaSignatureEvents, FaSignatureSlots> {
}
export {};
