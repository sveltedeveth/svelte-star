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
export type MdViewCarouselProps = typeof __propDef.props;
export type MdViewCarouselEvents = typeof __propDef.events;
export type MdViewCarouselSlots = typeof __propDef.slots;
export default class MdViewCarousel extends SvelteComponentTyped<MdViewCarouselProps, MdViewCarouselEvents, MdViewCarouselSlots> {
}
export {};
