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
export type MdCloudProps = typeof __propDef.props;
export type MdCloudEvents = typeof __propDef.events;
export type MdCloudSlots = typeof __propDef.slots;
export default class MdCloud extends SvelteComponentTyped<MdCloudProps, MdCloudEvents, MdCloudSlots> {
}
export {};
