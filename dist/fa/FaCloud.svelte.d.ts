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
export type FaCloudProps = typeof __propDef.props;
export type FaCloudEvents = typeof __propDef.events;
export type FaCloudSlots = typeof __propDef.slots;
export default class FaCloud extends SvelteComponentTyped<FaCloudProps, FaCloudEvents, FaCloudSlots> {
}
export {};
