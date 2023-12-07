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
export type WiCloudyProps = typeof __propDef.props;
export type WiCloudyEvents = typeof __propDef.events;
export type WiCloudySlots = typeof __propDef.slots;
export default class WiCloudy extends SvelteComponentTyped<WiCloudyProps, WiCloudyEvents, WiCloudySlots> {
}
export {};
