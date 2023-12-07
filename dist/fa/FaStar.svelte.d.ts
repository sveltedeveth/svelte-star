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
export type FaStarProps = typeof __propDef.props;
export type FaStarEvents = typeof __propDef.events;
export type FaStarSlots = typeof __propDef.slots;
export default class FaStar extends SvelteComponentTyped<FaStarProps, FaStarEvents, FaStarSlots> {
}
export {};
