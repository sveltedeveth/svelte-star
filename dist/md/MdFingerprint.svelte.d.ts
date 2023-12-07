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
export type MdFingerprintProps = typeof __propDef.props;
export type MdFingerprintEvents = typeof __propDef.events;
export type MdFingerprintSlots = typeof __propDef.slots;
export default class MdFingerprint extends SvelteComponentTyped<MdFingerprintProps, MdFingerprintEvents, MdFingerprintSlots> {
}
export {};
