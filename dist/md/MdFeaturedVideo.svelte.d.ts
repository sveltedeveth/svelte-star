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
export type MdFeaturedVideoProps = typeof __propDef.props;
export type MdFeaturedVideoEvents = typeof __propDef.events;
export type MdFeaturedVideoSlots = typeof __propDef.slots;
export default class MdFeaturedVideo extends SvelteComponentTyped<MdFeaturedVideoProps, MdFeaturedVideoEvents, MdFeaturedVideoSlots> {
}
export {};
