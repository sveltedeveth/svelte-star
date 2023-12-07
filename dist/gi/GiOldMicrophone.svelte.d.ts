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
export type GiOldMicrophoneProps = typeof __propDef.props;
export type GiOldMicrophoneEvents = typeof __propDef.events;
export type GiOldMicrophoneSlots = typeof __propDef.slots;
export default class GiOldMicrophone extends SvelteComponentTyped<GiOldMicrophoneProps, GiOldMicrophoneEvents, GiOldMicrophoneSlots> {
}
export {};
