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
export type FaYoutubeProps = typeof __propDef.props;
export type FaYoutubeEvents = typeof __propDef.events;
export type FaYoutubeSlots = typeof __propDef.slots;
export default class FaYoutube extends SvelteComponentTyped<FaYoutubeProps, FaYoutubeEvents, FaYoutubeSlots> {
}
export {};
