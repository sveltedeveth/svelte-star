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
export type MdCloudCircleProps = typeof __propDef.props;
export type MdCloudCircleEvents = typeof __propDef.events;
export type MdCloudCircleSlots = typeof __propDef.slots;
export default class MdCloudCircle extends SvelteComponentTyped<MdCloudCircleProps, MdCloudCircleEvents, MdCloudCircleSlots> {
}
export {};
