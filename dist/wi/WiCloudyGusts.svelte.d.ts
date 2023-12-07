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
export type WiCloudyGustsProps = typeof __propDef.props;
export type WiCloudyGustsEvents = typeof __propDef.events;
export type WiCloudyGustsSlots = typeof __propDef.slots;
export default class WiCloudyGusts extends SvelteComponentTyped<WiCloudyGustsProps, WiCloudyGustsEvents, WiCloudyGustsSlots> {
}
export {};
