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
export type FaCloudscaleProps = typeof __propDef.props;
export type FaCloudscaleEvents = typeof __propDef.events;
export type FaCloudscaleSlots = typeof __propDef.slots;
export default class FaCloudscale extends SvelteComponentTyped<FaCloudscaleProps, FaCloudscaleEvents, FaCloudscaleSlots> {
}
export {};
