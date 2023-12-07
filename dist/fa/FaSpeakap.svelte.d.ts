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
export type FaSpeakapProps = typeof __propDef.props;
export type FaSpeakapEvents = typeof __propDef.events;
export type FaSpeakapSlots = typeof __propDef.slots;
export default class FaSpeakap extends SvelteComponentTyped<FaSpeakapProps, FaSpeakapEvents, FaSpeakapSlots> {
}
export {};
