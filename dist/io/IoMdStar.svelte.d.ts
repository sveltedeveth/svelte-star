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
export type IoMdStarProps = typeof __propDef.props;
export type IoMdStarEvents = typeof __propDef.events;
export type IoMdStarSlots = typeof __propDef.slots;
export default class IoMdStar extends SvelteComponentTyped<IoMdStarProps, IoMdStarEvents, IoMdStarSlots> {
}
export {};
