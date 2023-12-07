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
export type MdExploreProps = typeof __propDef.props;
export type MdExploreEvents = typeof __propDef.events;
export type MdExploreSlots = typeof __propDef.slots;
export default class MdExplore extends SvelteComponentTyped<MdExploreProps, MdExploreEvents, MdExploreSlots> {
}
export {};
