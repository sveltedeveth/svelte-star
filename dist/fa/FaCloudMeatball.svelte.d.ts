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
export type FaCloudMeatballProps = typeof __propDef.props;
export type FaCloudMeatballEvents = typeof __propDef.events;
export type FaCloudMeatballSlots = typeof __propDef.slots;
export default class FaCloudMeatball extends SvelteComponentTyped<FaCloudMeatballProps, FaCloudMeatballEvents, FaCloudMeatballSlots> {
}
export {};
