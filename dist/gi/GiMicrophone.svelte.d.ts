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
export type GiMicrophoneProps = typeof __propDef.props;
export type GiMicrophoneEvents = typeof __propDef.events;
export type GiMicrophoneSlots = typeof __propDef.slots;
export default class GiMicrophone extends SvelteComponentTyped<GiMicrophoneProps, GiMicrophoneEvents, GiMicrophoneSlots> {
}
export {};
