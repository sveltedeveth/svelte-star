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
export type WiNightCloudyGustsProps = typeof __propDef.props;
export type WiNightCloudyGustsEvents = typeof __propDef.events;
export type WiNightCloudyGustsSlots = typeof __propDef.slots;
export default class WiNightCloudyGusts extends SvelteComponentTyped<WiNightCloudyGustsProps, WiNightCloudyGustsEvents, WiNightCloudyGustsSlots> {
}
export {};
