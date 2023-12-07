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
export type MdSubtitlesProps = typeof __propDef.props;
export type MdSubtitlesEvents = typeof __propDef.events;
export type MdSubtitlesSlots = typeof __propDef.slots;
export default class MdSubtitles extends SvelteComponentTyped<MdSubtitlesProps, MdSubtitlesEvents, MdSubtitlesSlots> {
}
export {};
