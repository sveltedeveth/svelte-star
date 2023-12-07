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
export type TiVendorAndroidProps = typeof __propDef.props;
export type TiVendorAndroidEvents = typeof __propDef.events;
export type TiVendorAndroidSlots = typeof __propDef.slots;
export default class TiVendorAndroid extends SvelteComponentTyped<TiVendorAndroidProps, TiVendorAndroidEvents, TiVendorAndroidSlots> {
}
export {};
