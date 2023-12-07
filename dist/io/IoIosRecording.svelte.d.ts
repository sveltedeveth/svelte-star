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
export type IoIosRecordingProps = typeof __propDef.props;
export type IoIosRecordingEvents = typeof __propDef.events;
export type IoIosRecordingSlots = typeof __propDef.slots;
export default class IoIosRecording extends SvelteComponentTyped<IoIosRecordingProps, IoIosRecordingEvents, IoIosRecordingSlots> {
}
export {};
