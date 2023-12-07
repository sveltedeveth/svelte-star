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
export type MdStarProps = typeof __propDef.props;
export type MdStarEvents = typeof __propDef.events;
export type MdStarSlots = typeof __propDef.slots;
export default class MdStar extends SvelteComponentTyped<MdStarProps, MdStarEvents, MdStarSlots> {
}
export {};
