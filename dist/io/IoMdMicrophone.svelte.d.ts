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
export type IoMdMicrophoneProps = typeof __propDef.props;
export type IoMdMicrophoneEvents = typeof __propDef.events;
export type IoMdMicrophoneSlots = typeof __propDef.slots;
export default class IoMdMicrophone extends SvelteComponentTyped<IoMdMicrophoneProps, IoMdMicrophoneEvents, IoMdMicrophoneSlots> {
}
export {};
