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
export type FaRegStarProps = typeof __propDef.props;
export type FaRegStarEvents = typeof __propDef.events;
export type FaRegStarSlots = typeof __propDef.slots;
export default class FaRegStar extends SvelteComponentTyped<FaRegStarProps, FaRegStarEvents, FaRegStarSlots> {
}
export {};
