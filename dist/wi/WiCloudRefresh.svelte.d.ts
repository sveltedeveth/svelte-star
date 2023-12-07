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
export type WiCloudRefreshProps = typeof __propDef.props;
export type WiCloudRefreshEvents = typeof __propDef.events;
export type WiCloudRefreshSlots = typeof __propDef.slots;
export default class WiCloudRefresh extends SvelteComponentTyped<WiCloudRefreshProps, WiCloudRefreshEvents, WiCloudRefreshSlots> {
}
export {};
