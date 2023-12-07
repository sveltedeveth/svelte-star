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
export type WiNightCloudyProps = typeof __propDef.props;
export type WiNightCloudyEvents = typeof __propDef.events;
export type WiNightCloudySlots = typeof __propDef.slots;
export default class WiNightCloudy extends SvelteComponentTyped<WiNightCloudyProps, WiNightCloudyEvents, WiNightCloudySlots> {
}
export {};
