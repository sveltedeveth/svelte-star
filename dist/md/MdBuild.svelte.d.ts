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
export type MdBuildProps = typeof __propDef.props;
export type MdBuildEvents = typeof __propDef.events;
export type MdBuildSlots = typeof __propDef.slots;
export default class MdBuild extends SvelteComponentTyped<MdBuildProps, MdBuildEvents, MdBuildSlots> {
}
export {};
