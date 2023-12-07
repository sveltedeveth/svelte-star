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
export type GiMeditationProps = typeof __propDef.props;
export type GiMeditationEvents = typeof __propDef.events;
export type GiMeditationSlots = typeof __propDef.slots;
export default class GiMeditation extends SvelteComponentTyped<GiMeditationProps, GiMeditationEvents, GiMeditationSlots> {
}
export {};
