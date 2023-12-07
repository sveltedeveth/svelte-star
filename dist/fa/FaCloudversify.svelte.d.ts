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
export type FaCloudversifyProps = typeof __propDef.props;
export type FaCloudversifyEvents = typeof __propDef.events;
export type FaCloudversifySlots = typeof __propDef.slots;
export default class FaCloudversify extends SvelteComponentTyped<FaCloudversifyProps, FaCloudversifyEvents, FaCloudversifySlots> {
}
export {};
