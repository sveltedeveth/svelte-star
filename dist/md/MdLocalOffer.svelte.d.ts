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
export type MdLocalOfferProps = typeof __propDef.props;
export type MdLocalOfferEvents = typeof __propDef.events;
export type MdLocalOfferSlots = typeof __propDef.slots;
export default class MdLocalOffer extends SvelteComponentTyped<MdLocalOfferProps, MdLocalOfferEvents, MdLocalOfferSlots> {
}
export {};
