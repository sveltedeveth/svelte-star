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
export type FaCloudsmithProps = typeof __propDef.props;
export type FaCloudsmithEvents = typeof __propDef.events;
export type FaCloudsmithSlots = typeof __propDef.slots;
export default class FaCloudsmith extends SvelteComponentTyped<FaCloudsmithProps, FaCloudsmithEvents, FaCloudsmithSlots> {
}
export {};
