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
export type MdSlideshowProps = typeof __propDef.props;
export type MdSlideshowEvents = typeof __propDef.events;
export type MdSlideshowSlots = typeof __propDef.slots;
export default class MdSlideshow extends SvelteComponentTyped<MdSlideshowProps, MdSlideshowEvents, MdSlideshowSlots> {
}
export {};
