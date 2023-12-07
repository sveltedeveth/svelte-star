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
export type MdTrendingUpProps = typeof __propDef.props;
export type MdTrendingUpEvents = typeof __propDef.events;
export type MdTrendingUpSlots = typeof __propDef.slots;
export default class MdTrendingUp extends SvelteComponentTyped<MdTrendingUpProps, MdTrendingUpEvents, MdTrendingUpSlots> {
}
export {};
