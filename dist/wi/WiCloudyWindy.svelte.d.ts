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
export type WiCloudyWindyProps = typeof __propDef.props;
export type WiCloudyWindyEvents = typeof __propDef.events;
export type WiCloudyWindySlots = typeof __propDef.slots;
export default class WiCloudyWindy extends SvelteComponentTyped<WiCloudyWindyProps, WiCloudyWindyEvents, WiCloudyWindySlots> {
}
export {};
