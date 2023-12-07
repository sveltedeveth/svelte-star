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
export type IoMdCloudProps = typeof __propDef.props;
export type IoMdCloudEvents = typeof __propDef.events;
export type IoMdCloudSlots = typeof __propDef.slots;
export default class IoMdCloud extends SvelteComponentTyped<IoMdCloudProps, IoMdCloudEvents, IoMdCloudSlots> {
}
export {};
