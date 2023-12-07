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
export type WiCloudDownProps = typeof __propDef.props;
export type WiCloudDownEvents = typeof __propDef.events;
export type WiCloudDownSlots = typeof __propDef.slots;
export default class WiCloudDown extends SvelteComponentTyped<WiCloudDownProps, WiCloudDownEvents, WiCloudDownSlots> {
}
export {};
