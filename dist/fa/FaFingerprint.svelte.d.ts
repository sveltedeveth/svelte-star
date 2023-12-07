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
export type FaFingerprintProps = typeof __propDef.props;
export type FaFingerprintEvents = typeof __propDef.events;
export type FaFingerprintSlots = typeof __propDef.slots;
export default class FaFingerprint extends SvelteComponentTyped<FaFingerprintProps, FaFingerprintEvents, FaFingerprintSlots> {
}
export {};
