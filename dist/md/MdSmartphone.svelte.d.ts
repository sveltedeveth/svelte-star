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
export type MdSmartphoneProps = typeof __propDef.props;
export type MdSmartphoneEvents = typeof __propDef.events;
export type MdSmartphoneSlots = typeof __propDef.slots;
export default class MdSmartphone extends SvelteComponentTyped<MdSmartphoneProps, MdSmartphoneEvents, MdSmartphoneSlots> {
}
export {};
