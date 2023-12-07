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
export type MdCloudDoneProps = typeof __propDef.props;
export type MdCloudDoneEvents = typeof __propDef.events;
export type MdCloudDoneSlots = typeof __propDef.slots;
export default class MdCloudDone extends SvelteComponentTyped<MdCloudDoneProps, MdCloudDoneEvents, MdCloudDoneSlots> {
}
export {};
