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
export type FaCertificateProps = typeof __propDef.props;
export type FaCertificateEvents = typeof __propDef.events;
export type FaCertificateSlots = typeof __propDef.slots;
export default class FaCertificate extends SvelteComponentTyped<FaCertificateProps, FaCertificateEvents, FaCertificateSlots> {
}
export {};
