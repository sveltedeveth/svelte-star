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
export type TiVendorAppleProps = typeof __propDef.props;
export type TiVendorAppleEvents = typeof __propDef.events;
export type TiVendorAppleSlots = typeof __propDef.slots;
export default class TiVendorApple extends SvelteComponentTyped<TiVendorAppleProps, TiVendorAppleEvents, TiVendorAppleSlots> {
}
export {};
