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
export type FaFileSignatureProps = typeof __propDef.props;
export type FaFileSignatureEvents = typeof __propDef.events;
export type FaFileSignatureSlots = typeof __propDef.slots;
export default class FaFileSignature extends SvelteComponentTyped<FaFileSignatureProps, FaFileSignatureEvents, FaFileSignatureSlots> {
}
export {};
