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
export type IoMdRecordingProps = typeof __propDef.props;
export type IoMdRecordingEvents = typeof __propDef.events;
export type IoMdRecordingSlots = typeof __propDef.slots;
export default class IoMdRecording extends SvelteComponentTyped<IoMdRecordingProps, IoMdRecordingEvents, IoMdRecordingSlots> {
}
export {};
