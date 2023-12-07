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
export type FaSpeakerDeckProps = typeof __propDef.props;
export type FaSpeakerDeckEvents = typeof __propDef.events;
export type FaSpeakerDeckSlots = typeof __propDef.slots;
export default class FaSpeakerDeck extends SvelteComponentTyped<FaSpeakerDeckProps, FaSpeakerDeckEvents, FaSpeakerDeckSlots> {
}
export {};
