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
export type WiCloudUpProps = typeof __propDef.props;
export type WiCloudUpEvents = typeof __propDef.events;
export type WiCloudUpSlots = typeof __propDef.slots;
export default class WiCloudUp extends SvelteComponentTyped<WiCloudUpProps, WiCloudUpEvents, WiCloudUpSlots> {
}
export {};
