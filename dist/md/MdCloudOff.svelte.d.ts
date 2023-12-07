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
export type MdCloudOffProps = typeof __propDef.props;
export type MdCloudOffEvents = typeof __propDef.events;
export type MdCloudOffSlots = typeof __propDef.slots;
export default class MdCloudOff extends SvelteComponentTyped<MdCloudOffProps, MdCloudOffEvents, MdCloudOffSlots> {
}
export {};
