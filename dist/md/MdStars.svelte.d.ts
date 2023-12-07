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
export type MdStarsProps = typeof __propDef.props;
export type MdStarsEvents = typeof __propDef.events;
export type MdStarsSlots = typeof __propDef.slots;
export default class MdStars extends SvelteComponentTyped<MdStarsProps, MdStarsEvents, MdStarsSlots> {
}
export {};
