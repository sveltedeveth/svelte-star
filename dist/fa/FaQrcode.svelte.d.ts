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
export type FaQrcodeProps = typeof __propDef.props;
export type FaQrcodeEvents = typeof __propDef.events;
export type FaQrcodeSlots = typeof __propDef.slots;
export default class FaQrcode extends SvelteComponentTyped<FaQrcodeProps, FaQrcodeEvents, FaQrcodeSlots> {
}
export {};
