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
export type FaWhatsappProps = typeof __propDef.props;
export type FaWhatsappEvents = typeof __propDef.events;
export type FaWhatsappSlots = typeof __propDef.slots;
export default class FaWhatsapp extends SvelteComponentTyped<FaWhatsappProps, FaWhatsappEvents, FaWhatsappSlots> {
}
export {};
