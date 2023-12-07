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
export type GiSmartphoneProps = typeof __propDef.props;
export type GiSmartphoneEvents = typeof __propDef.events;
export type GiSmartphoneSlots = typeof __propDef.slots;
export default class GiSmartphone extends SvelteComponentTyped<GiSmartphoneProps, GiSmartphoneEvents, GiSmartphoneSlots> {
}
export {};
